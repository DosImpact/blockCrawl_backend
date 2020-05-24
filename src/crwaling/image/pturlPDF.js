import pt from "puppeteer";
import { PUBLIC_DIR } from "../../utils/checkPublic";
import path from "path";
/**
 * @param {url,commonTag} textContent
 */

const pturlCapture = async ({ url }) => {
  console.time(__filename);
  console.log(`${__filename} is stared...`);
  if (!url) {
    throw Error("ERROR: url Is NULL");
  }

  const brs = await pt.launch({
    headless: true,
    args: ["--no-sandbox", "--window-size=1920,1080"],
  });
  const page = await brs.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);
  const pageTitle = await page.title();
  const fileName = `${pageTitle}_${Date.now()}.pdf`;
  const fileURL = path.join(PUBLIC_DIR, fileName);

  await page.pdf({
    path: fileURL,
    printBackground: true,
    format: "A4",
  });

  console.log(`${__filename} is END✅`);
  console.timeEnd(__filename);
  return fileName;
};
export default pturlCapture;
