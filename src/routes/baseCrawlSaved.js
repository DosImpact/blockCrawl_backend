import express from "express";
import path from "path";
import pturlNTagNImg from "../crwaling/basic/pturlNTagNImg";
import { saveWithImageURL, checkFolder } from "../crwaling/saveFile/saveUtils";

const router = express.Router();

router.post("/urlNTagNImg", async (req, res) => {
  const { tags, url, tagsImgs } = req.body;
  // console.log(tags, url);
  if (tags === undefined || url === undefined) {
    // return new Promise.reject(new Error("tags or url need"));
    throw Error("tag or url need (tagsImgs optional)");
  }
  let result;
  try {
    result = await pturlNTagNImg({ commonTags: tags, url, tagsImgs });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false });
  }
  const folderName = Date.now();
  await checkFolder(folderName);
  await Promise.all(
    result.tagsImgs_result[1].map((e) => {
      return saveWithImageURL(e, folderName, path.basename(e));
    })
  );

  return res.status(200).json({ result, success: true });
});

module.exports = router;
