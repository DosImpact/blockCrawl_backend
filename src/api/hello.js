import naver from "../crwaling/naver";

export default {
  Query: {
    hello: () => "HELLO GUI Crawling world",
    hello2: () => "HELLO 2",
    hello3: (_, args) => `HELLO 3 ${args.id}`,
    hello4: (_, args) =>
      ` HELLO 4 : id : ${args.id} yourname: ${
        args.name
      } your infos :  ${JSON.stringify(args.info)}`,
    naverDust: async () => naver(),
  },
};
