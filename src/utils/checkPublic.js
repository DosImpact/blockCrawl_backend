/**
 * @param {None} Boolean
 */

import "./Constant";
import path from "path";
import fs from "fs";

const ROOT_DIR = path.join(__dirname, "../../");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const checkPublicFile = () => {
  fs.readdir(PUBLIC_DIR, (e) => {
    if (e) {
      fs.mkdirSync(PUBLIC_DIR);
      return false;
    }
  });
  return true;
};

export default checkPublicFile;

export { ROOT_DIR, PUBLIC_DIR };
