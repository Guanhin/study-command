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
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
    const page = await browser.newPage({ timezoneId: 'America/New_York' });
    await page.clock.install({ time: new Date('2026-09-19T03:59:58Z') });
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    await page.evaluate(() => {
      commit(parseCsvSchedule('type,date,title,minutes\naction,2026-09-19,SAT review,25\nevent,2026-09-19,Meeting,30\ndeadline,2026-09-19,Essay,45'));
      selectedDate = '2026-09-19';
      renderCalendar();
    });
    assert.equal(await page.locator('#task-list .task').count(), 0);
    assert.equal(await page.locator('#selected-day-events .event-row').count(), 3);
    await page.clock.runFor(3000);
    const rolloverCount = await page.locator('#task-list .task').count();
    const startCount = await page.locator('#selected-day-events button[data-start-action]').count();
    console.log(JSON.stringify({ rolloverCount, startCount }));
    assert.equal(rolloverCount, 3, 'Queue must refresh after midnight');
    assert.equal(startCount, 1, 'Calendar actions must be startable; reminders must not');
    await page.locator('#selected-day-events button[data-start-action]').click();
    assert.equal(await page.evaluate(() => focusRunning), true);
    assert.equal(await page.locator('#focus-title').textContent(), 'SAT review');
    await page.evaluate(() => quitFocus());
    await page.setViewportSize({ width: 390, height: 844 });
    // An explicitly selected future day is startable without changing its scheduled date.
    await page.evaluate(() => {
      commit([createAction({ title: 'Tomorrow task', minutes: 20 }, '2026-09-20')]);
      selectedDate = '2026-09-20';
      renderCalendar();
    });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Calendar start button must fit mobile');
    await page.locator('#selected-day-events button[data-start-action]').click();
    assert.equal(await page.evaluate(() => focusRunning), true);
    assert.equal(await page.evaluate(() => actions[0].day), '2026-09-20');
    assert.equal(await page.locator('#focus-title').textContent(), 'Tomorrow task');
    console.log('PASS: midnight refresh and calendar task start');
  } finally { await browser?.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
