const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('file:///home/m4verick03/Pictures/Portfolio_Website/index.html', {waitUntil: 'networkidle0'});
  console.log('Page loaded');
  await page.click('#csd-tile-leetcode');
  console.log('Clicked tile');
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
