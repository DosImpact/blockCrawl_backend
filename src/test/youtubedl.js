import ytdl from "ytdl-core";
import fs from "fs";
const DOWN_URL = "https://www.youtube.com/watch?v=rOCymN-Rwiw";

const youtubedl = async () => {
  const info = await ytdl.getInfo(DOWN_URL);
  console.log(info);
  console.log(info.title);
  ytdl(DOWN_URL).pipe(
    fs.createWriteStream(`${info.title.replace("/\u20A9/g", "")}.mp4`)
  );
};

export default youtubedl;
