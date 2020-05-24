import pt from "puppeteer";
import path from "path";
/**
 * @param {url,commonTag} textContent
 */

const FILE_NAME = path.basename(__filename);

export default async ({ url, commonTag }) => {
  let result = null;
  console.time(FILE_NAME);
  console.log(`${FILE_NAME} is started...`);
  const brs = await pt.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await brs.newPage();
  await page.goto(url);

  try {
    const text = await page.evaluate(
      ({ commonTag }) => {
        const tagNode = document.querySelector(commonTag);
        if (tagNode) {
          return tagNode.textContent;
        }
      },
      { commonTag }
    );
    result = text.trim();
  } catch (error) {
    console.error(error);
  } finally {
    await page.close();
  }

  console.log(`${FILE_NAME} :${result} is END ✅ `);
  await brs.close();
  console.timeEnd(FILE_NAME);
  return result;
};
