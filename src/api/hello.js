import naver from "../crwaling/naver";

export default {
  Query: {
    hello: () => "HELLO GUI Crawling world",
    naverDust: async () => naver(),
  },
};
