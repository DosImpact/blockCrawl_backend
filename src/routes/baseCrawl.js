import { ptNurlTag, pturlTag, pturlNTag } from "../crwaling/basic";
import express from "express";

const router = express.Router();

router.post("/NurlTag", async (req, res) => {
  const { tag, urls } = req.body;
  if (
    tag === undefined ||
    typeof tag !== "string" ||
    urls === undefined ||
    !Array.isArray(urls)
  ) {
    throw Error("tag or url need");
  }
  const result = await ptNurlTag({ commonTag: tag, urls });
  return res.status(200).json({ result, success: true });
});

router.post("/urlTag", async (req, res) => {
  const { tag, url } = req.body;
  if (tag === undefined || url === undefined) {
    throw Error("tag or url need");
  }
  const result = await pturlTag({ commonTag: tag, url });
  return res.status(200).json({ result, success: true });
});

router.post("/urlNTag", async (req, res) => {
  const { tags, url } = req.body;
  // console.log(tags, url);
  if (tags === undefined || url === undefined) {
    // return new Promise.reject(new Error("tags or url need"));
    throw Error("tag or url need");
  }
  const result = await pturlNTag({ commonTags: tags, url });
  return res.status(200).json({ result, success: true });
});

module.exports = router;
