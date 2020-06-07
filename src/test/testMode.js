import nmoive from "./nmoive";
import basic from "./basic";
import basic2 from "./basic2";

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

const urlMovieList = "https://movie.naver.com/movie/running/current.nhn";
const tagMovieTitle =
  "#content > div.article > div:nth-child(1) > div.lst_wrap > ul > li:nth-child(1) > dl > dt > a";
// nmoive({ urls, commonTag });
//basic({ urls, commonTag });
