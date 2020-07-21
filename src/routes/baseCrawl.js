import { ptNurlTag, pturlTag } from "../crwaling/basic";
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

module.exports = router;
