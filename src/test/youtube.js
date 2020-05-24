import pt from "puppeteer";
/**
 * @version(버전 81.0.4044.0(개발자 빌드) (64비트))
 * ==> update
 * @version(버전 85.0.4155.0(개발자 빌드) (64비트))
 */

const width = 1920;
const height = 1080;

const youtube = async () => {
  const browserFetcher = pt.createBrowserFetcher();
  const revisionInfo = await browserFetcher.download("771414");
  const brs = await pt.launch({
    headless: false,
    args: [`--window-size=${width},${height}`, `--disable-notifications`],
    executablePath: revisionInfo.executablePath,
  });
  const page = await brs.newPage();
  await page.setViewport({ width, height });
  await page.goto("https://www.youtube.com");

  await page.waitFor(10000);
  await brs.close();
};

export default youtube;
