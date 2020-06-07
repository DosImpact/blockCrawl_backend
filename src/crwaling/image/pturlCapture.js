import pt from "puppeteer";
import { PUBLIC_DIR } from "../../utils/checkPublic";
import path from "path";
import { brs, brsCheck } from "../browser";

/**
 * @param {url,commonTag} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

const pturlCapture = async ({ url, fullShot = true }) => {
  let fileName = null;
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }

  if (!url) {
    throw Error("ERROR: url Is NULL");
  }
  const page = await brs.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  try {
    await page.goto(url, { waitUntil: "networkidle0" });
    const pageTitle = await page.title();
    fileName = `${pageTitle}_${Date.now()}.png`;
    const fileURL = path.join(PUBLIC_DIR, fileName);
    console.log(fileName, "filename", fileURL, "fileURL");

    await page.screenshot({
      path: fileURL,
      fullPage: fullShot,
    });
  } catch (error) {
    throw Error(`ERROR: screenshot Fail${error}`);
  } finally {
    await page.close();
  }

  console.log(`Finished ${FILE_NAME} ✔`, fileName);
  return fileName;
};
export default pturlCapture;
