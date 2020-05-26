import pt from "puppeteer";
import { PUBLIC_DIR } from "../../utils/checkPublic";
import path from "path";
/**
 * @param {url,commonTag} textContent
 */

const pturlCapture = async ({ url, fullShot = true }) => {
  console.time(__filename);
  console.log(`${__filename} is stared...`);
  if (!url) {
    throw Error("ERROR: url Is NULL");
  }

  const brs = await pt.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await brs.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  const pageTitle = await page.title();
  const fileName = `${pageTitle}_${Date.now()}.png`;
  const fileURL = path.join(PUBLIC_DIR, fileName);
  await page.screenshot({
    path: fileURL,
    fullPage: fullShot,
  });

  console.log(`${__filename} is END✅`);
  console.timeEnd(__filename);
  return fileName;
};
export default pturlCapture;
