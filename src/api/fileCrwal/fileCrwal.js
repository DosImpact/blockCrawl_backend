import { pturlCapture } from "../../crwaling/image";
import checkPublicFile from "../../utils/checkPublic";
import path from "path";

export default {
  Query: {
    urlCapture: async (_, { url, fullShot }) => {
      try {
        checkPublicFile();
        const res = await pturlCapture({ url, fullShot });
        return `${path.normalize(process.env.SERVER_URL) +
          encodeURIComponent(res)}`;
      } catch (error) {
        throw Error("ERROR: urlCapture fail");
      }
    },
  },
};
