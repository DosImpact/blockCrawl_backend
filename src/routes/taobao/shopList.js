import ptShopList from "../../crwaling/taobao/ptShopList";
import express from "express";

const router = express.Router();

router.post("/taobaoList", async (req, res) => {
  const { itemtag, url } = req.body;
  if (
    url === undefined ||
    typeof url !== "string" ||
    itemtag === undefined ||
    typeof itemtag !== "string"
  ) {
    throw Error("itemtag or url need");
  }
  const result = await ptShopList({ url, itemtag });
  return res.status(200).json({ result, success: true });
});

module.exports = router;
