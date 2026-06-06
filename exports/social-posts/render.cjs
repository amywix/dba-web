const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ADS = path.resolve(__dirname, "../../artifacts/mockup-sandbox/public/ads");
const OUT = path.resolve(__dirname, "png");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const files = fs.readdirSync(ADS).filter((f) => f.endsWith(".html")).sort();
  const browser = await chromium.launch({ executablePath: process.env.REPLIT_PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  for (const f of files) {
    await page.goto("file://" + path.join(ADS, f), { waitUntil: "load", timeout: 20000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);
    const out = path.join(OUT, f.replace(/\.html$/, ".png"));
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    console.log("rendered", path.basename(out));
  }
  await browser.close();
})();
