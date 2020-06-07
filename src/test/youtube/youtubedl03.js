// Install fluent-ffmpeg before running this!
const readline = require("readline");
const path = require("path");
const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");

const url = "https://www.youtube.com/watch?v=-zNQngWZJ7s";
const audioOutput = path.resolve(__dirname, "sound.mp4");
const videoOutput = path.resolve(__dirname, "video.mp4");
const mainOutput = path.resolve(__dirname, "output.mp4");

process.env.FFMPEG_PATH = path.normalize("C:/ffmpeg/bin/ffmpeg.exe");

const onProgress = (chunkLength, downloaded, total) => {
  const percent = downloaded / total;
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
  process.stdout.write(
    `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
      total /
      1024 /
      1024
    ).toFixed(2)}MB)`
  );
};

ytdl(url, {
  filter: (format) => format.container === "mp4" && !format.qualityLabel,
  quality: "highest",
})
  .on("progress", onProgress)
  .pipe(fs.createWriteStream(`${audioOutput}`));

ytdl(url, {
  filter: (format) => format.container === "mp4" && !format.audioEncoding,
  quality: 137,
})
  .on("progress", onProgress)
  .pipe(fs.createWriteStream(`${videoOutput}`))
  .on("finish", () => {
    ffmpeg()
      .input(videoOutput)
      .videoCodec("copy")
      .input(audioOutput)
      .audioCodec("copy")
      .save(mainOutput)
      .on("error", console.error)
      .on("end", () => {
        fs.unlink(audioOutput, (err) => {
          if (err) console.error(err);
          else console.log(`\nfinished downloading, delete to ${audioOutput}`);
        });
        fs.unlink(videoOutput, (err) => {
          if (err) console.error(err);
          else console.log(`\nfinished downloading, delete to ${videoOutput}`);
        });
      });
  });
