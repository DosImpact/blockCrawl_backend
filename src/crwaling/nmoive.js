import pt from "puppeteer";
import axios from "axios";
import fs from "fs";

/**
 * 주소들을 입력
 * html 설렉터를 입력
 *  > 결과 obj 반환
 */

export default async ({ urls, commonTag }) => {
  const urls = [
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=134963",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193839",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=182042",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=193214",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=183991",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=169665",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=188993",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=180369",
    "https://movie.naver.com/movie/bi/mi/basic.nhn?code=190568",
  ];

  const commonTag =
    "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)";

  const result = new Array(urls.length);
  const brs = await pt.launch({ headless: false });
  await Promise.all(
    urls.map(async (e, idx) => {
      const page = await brs.newPage();
      await page.goto(e);
      try {
        const text = await page.evaluate(() => {
          const score = document.querySelector(
            "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)"
          );
          if (score) {
            return score.textContent;
          }
        });
        result[idx] = text.trim();
      } catch (error) {
        console.error(error);
      } finally {
        await page.close();
      }
    })
  );
};
