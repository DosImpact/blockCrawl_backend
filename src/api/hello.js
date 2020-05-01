import naver from "../crwaling/naver";

export default {
  Query: {
    hello: () => "HELLO GUI Crawling world",
    hello2: () => "HELLO 2",
    hello3: (_, args) => `HELLO 3 ${args.id}`,
    naverDust: async () => naver(),
  },
};
