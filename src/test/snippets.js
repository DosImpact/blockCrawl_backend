const pt = require("puppeteer");

const basic2 = async (url) => {
  const brs = await pt.launch({ headless: true });
  const page = await brs.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.pdf({
    printBackground: true,
    path: `${__dirname}\\test.pdf`,
    format: "A4",
  });

  await page.close();
  await brs.close();
};

basic2("https://www.instagram.com/?hl=en");
