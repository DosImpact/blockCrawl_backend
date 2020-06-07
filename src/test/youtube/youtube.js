import pt from "puppeteer";
import path from "path";
/**
 * @version(버전 81.0.4044.0(개발자 빌드) (64비트))
 * ==> update
 * @version(버전 85.0.4155.0(개발자 빌드) (64비트))
 */

/**
 * @param {document.querySelector("#buttons ytd-button-renderer:last-child a")}
 */
const width = 1920;
const height = 1080;

const BASE_DIR = path.join(__dirname, "../../User Data");

const youtube = async () => {
  const brs = await pt.launch({
    headless: false,
    args: [`--window-size=${width},${height}`, `--disable-notifications`],
    userDataDir: path.normalize(BASE_DIR),
  });
  const page = await brs.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
  );
  await page.setViewport({ width: width - 900, height });
  await page.goto("https://www.youtube.com", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("#buttons ytd-button-renderer:last-child a");
  await page.click("#buttons ytd-button-renderer:last-child a");
  await page.waitForNavigation({
    waitUntil: "networkidle2",
  });
  await page.waitForSelector("#identifierId");
  await page.type("#identifierId", "ypd03008@gmail.com");
  await page.waitForSelector("#identifierNext");
  await page.click("#identifierNext");

  await page.waitForNavigation({
    waitUntil: "networkidle2",
  });

  await page.waitFor(1000000000);
  await brs.close();
};

export default youtube;
