const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = path.join(__dirname, '..', pathname === '/' ? 'index.html' : pathname);
    res.setHeader('Content-Type', ({ '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' })[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).on('error', () => { res.statusCode = 404; res.end(); }).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  const failures = [];
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
    const page = await browser.newPage();
    await page.clock.install({ time: new Date('2026-09-19T12:00:00Z') });
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    const check = async (name, run) => {
      try { await run(); console.log('PASS:', name); }
      catch (error) { failures.push(`${name}: ${error.message}`); console.log('FAIL:', name, error.message); }
    };
    await check('Planner respects 135 minute cap', async () => {
      const total = await page.evaluate(() => {
        commit([createAction({title: 'Existing', minutes: 130}), createAction({title: 'Exam', type: 'deadline', deadline: todayKey(), minutes: 45})]);
        return 130 + buildPlan().reduce((sum, action) => sum + action.minutes, 0);
      });
      assert.ok(total <= 135, `planned ${total} minutes`);
    });
    await check('CSV retains reminder time', async () => {
      const row = await page.evaluate(() => parseCsvSchedule('type,date,title,start,end\nevent,2026-09-19,Meeting,16:00,16:45')[0]);
      assert.equal(row.start, '16:00');
      assert.equal(row.end, '16:45');
      assert.equal(row.minutes, 45);
    });
    await check('CSV cannot create negative focus timer', async () => {
      const rows = await page.evaluate(() => parseCsvSchedule('type,date,title,minutes\naction,2026-09-19,Invalid,-5\naction,2026-09-19,Valid,25'));
      assert.ok(rows.every(row => Number.isFinite(row.minutes) && row.minutes > 0));
      assert.ok(rows.some(row => row.title === 'Valid'));
    });
    await check('Idle focus event preserves timer preview', async () => {
      await page.evaluate(() => { quitFocus(); commit([createAction({title: 'Review', minutes: 25})]); });
      const before = await page.locator('#focus-clock').getAttribute('data-time');
      assert.equal(before, '25:00');
      await page.evaluate(() => window.dispatchEvent(new Event('focus')));
      assert.equal(await page.locator('#focus-clock').getAttribute('data-time'), before);
    });
    await check('Finishing clears enabled session controls', async () => {
      await page.evaluate(() => { startFocus(actions[0].id); finishActive(); });
      assert.equal(await page.locator('#finish-focus').isDisabled(), true);
      assert.equal(await page.locator('#pause-focus').isDisabled(), true);
    });
    await check('Quit accounts for elapsed time while timer callbacks are suspended', async () => {
      const elapsed = await page.evaluate(() => {
        commit([createAction({title: 'Review', minutes: 25})]);
        startFocus(actions[0].id);
        const previous = stats.totalFocusSeconds;
        focusEndsAt -= 120000;
        quitFocus();
        return stats.totalFocusSeconds - previous;
      });
      assert.equal(elapsed, 120);
    });
    await check('Automatic completion happens exactly once', async () => {
      await page.evaluate(() => {
        commit([createAction({ title: 'Short task', minutes: 1 })]);
        startFocus(actions[0].id);
      });
      const before = await page.evaluate(() => stats.focusBlocksCompleted);
      await page.clock.runFor(61000);
      assert.equal(await page.evaluate(() => stats.focusBlocksCompleted), before + 1);
      assert.equal(await page.evaluate(() => actions[0].completed), true);
      await page.clock.runFor(2000);
      assert.equal(await page.evaluate(() => stats.focusBlocksCompleted), before + 1);
    });
    assert.deepEqual(failures, []);
  } finally { await browser?.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
