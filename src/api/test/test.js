import removeFile from "../../utils/removeFile";

export default {
  Query: {
    test: () => {
      console.log("test");
      removeFile();
      return true;
    },
  },
};
