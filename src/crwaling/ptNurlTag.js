import pt from "puppeteer";

/**
 * @param {urls,commonTag} textContent
 */

export default async ({ urls, commonTag }) => {
  console.time("ptNurlTag.js");
  console.log("start ptNurlTag.js...");
  const result = new Array(urls.length);
  const brs = await pt.launch({ headless: true, args: ["--no-sandbox"] });

  await Promise.all(
    urls.map(async (e, idx) => {
      const page = await brs.newPage();
      await page.goto(e);
      try {
        const text = await page.evaluate(
          ({ commonTag }) => {
            const score = document.querySelector(commonTag);
            if (score) {
              return score.textContent;
            }
          },
          { commonTag }
        );
        result[idx] = text.trim();
      } catch (error) {
        console.error(error);
      } finally {
        await page.close();
      }
    })
  );
  console.log(result);
  console.log("Finished ptNurlTag.js");
  await brs.close();
  console.timeEnd("ptNurlTag.js");
  return result;
};
