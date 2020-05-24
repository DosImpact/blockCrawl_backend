import pt from "puppeteer";
/**
 *
 * @param {url,commonTag} getTextContent
 */
const basic = async ({ urls, commonTag }) => {
  const brs = await pt.launch({ headless: false });
  let result = null;
  result = await Promise.all(
    urls.map(async (url) => {
      let res = null;
      const page = await brs.newPage();
      await page.goto(url);
      const props = { commonTag };
      res = await page.evaluate(({ commonTag }) => {
        console.log(commonTag);
        const taghandle = document.querySelector(commonTag);
        const tagtext = taghandle.textContent;
        return tagtext.trim();
      }, props);
      await page.close();

      return res;
    })
  );
  console.log(result);

  await brs.close();
};

export default basic;
