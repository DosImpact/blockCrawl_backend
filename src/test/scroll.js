import pt from "puppeteer";

const basic2 = async ({ urlMovieList, tagMovieTitle }) => {
  const brs = await pt.launch({ headless: false });
  const page = await brs.newPage();
  await page.goto(urlMovieList);
  const props = { tagMovieTitle };
  const res = await page.evaluate(({ tagMovieTitle }) => {
    const ultag = document.querySelector(
      "#content > div.article > div:nth-child(1) > div.lst_wrap > ul"
    );
    const NodeList = ultag.querySelectorAll("li dt a ");
    return Array.from(NodeList).map((node) => node.textContent.trim());
  }, props);
  console.log(res);
  await brs.close();
};

export default basic2;
