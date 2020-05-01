export default {
  Query: {
    NurlTag: async (_, args) => {
      const { tag, urls } = args;
      console.log("data incoming", tag, urls);
      return "success";
    },
  },
};
