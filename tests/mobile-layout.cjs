// Run with NODE_PATH pointing to an installation of playwright.
const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

(async () => {
  const root = path.resolve(__dirname, '..');
  const server = http.createServer((req, res) => {
    const file = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    const target = req.url === '/' ? path.join(root, 'index.html') : file;
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png' };
    res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).on('error', () => { res.statusCode = 404; res.end(); }).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, channel: 'msedge' }).catch(error => { server.close(); throw error; });
  const failures = [];
  try {
    for (const language of ['en', 'zh']) {
    for (const width of [320, 390, 430, 768, 820, 1024, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 844 }, hasTouch: width <= 820 });
      await page.goto(`http://127.0.0.1:${server.address().port}`);
      await page.evaluate(language => setLanguage(language), language);
      for (const theme of ['world', 'starry']) {
        await page.evaluate(theme => setTheme(theme), theme);
        const layout = await page.evaluate(() => {
          const shell = document.querySelector('.app-shell').getBoundingClientRect();
          const button = document.querySelector('button[data-theme="starry"]');
          const rect = button.getBoundingClientRect();
          const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
          return { viewport: innerWidth, scroll: document.documentElement.scrollWidth, shellRight: shell.right,
            themeClickable: button === hit || button.contains(hit),
            overflow: [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => el.className).slice(0, 8) };
        });
        console.log(language, width, theme, JSON.stringify(layout));
        try {
          if (theme === 'starry') {
            const sky = await page.evaluate(() => {
              const before = getComputedStyle(document.body, '::before');
              return { image: before.backgroundImage, position: before.position, inset: before.inset,
                transform: before.transform, animation: before.animationName,
                overlay: getComputedStyle(document.body, '::after').backgroundImage,
                ring: getComputedStyle(document.querySelector('.focus-clock'), '::after').content };
            });
            assert.ok(sky.image.includes('starry-sky-portrait.png'));
            assert.equal(sky.position, 'fixed');
            assert.equal(sky.inset, '0px');
            assert.equal(sky.transform, 'none');
            assert.equal(sky.animation, 'none');
            assert.ok(!sky.overlay.includes('radial-gradient'));
            assert.equal(sky.ring, 'none');
          }
          assert.ok(layout.scroll <= width + 1, 'Horizontal overflow');
          assert.ok(Math.abs(layout.shellRight - width) <= 1, 'Right-side gap');
          assert.ok(layout.themeClickable, 'Theme switch covered');
          const nextTheme = theme === 'world' ? 'starry' : 'world';
          await page.locator(`button[data-theme="${nextTheme}"]`).click({ timeout: 1000 });
          assert.equal(await page.locator('body').getAttribute('data-theme'), nextTheme);
          assert.equal(await page.locator(`button[data-theme="${nextTheme}"]`).getAttribute('aria-pressed'), 'true');
          await page.reload();
          assert.equal(await page.locator('body').getAttribute('data-theme'), nextTheme);
        } catch (error) { failures.push(`${language}/${width}/${theme}: ${error.message}`); }
      }
      await page.close();
    }
    }
    assert.deepEqual(failures, []);
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
