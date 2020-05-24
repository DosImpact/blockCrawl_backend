import { pturlCapture, pturlPDF } from "../../crwaling/image";
import checkPublicFile from "../../utils/checkPublic";
import path from "path";
import removeFile from "../../utils/removeFile";

export default {
  Query: {
    urlCapture: async (_, { url, fullShot }) => {
      try {
        checkPublicFile();
        const res = await pturlCapture({ url, fullShot });
        setTimeout(() => {
          removeFile(res);
        }, 180000);
        return `${res}`;
      } catch (error) {
        throw Error("ERROR: urlCapture fail");
      }
    },
    urlPDF: async (_, { url }) => {
      try {
        checkPublicFile();
        const res = await pturlPDF({ url });
        console.log(res);
        setTimeout(() => {
          removeFile(res);
        }, 180000);
        return `${res}`;
        // return `${path.normalize(process.env.SERVER_URL) +
        //   encodeURIComponent(res)}`;
      } catch (error) {
        throw Error("ERROR: urlCapture fail");
      }
    },
  },
};
