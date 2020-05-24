
// ffmpeg()
//   .input(videoOutput)
//   .videoCodec("copy")
//   .input(audioOutput)
//   .audioCodec("copy")
//   .save(mainOutput)
//   .on("error", console.error)
//   .on("end", () => {
//     fs.unlink(audioOutput, (err) => {
//       if (err) console.error(err);
//       else console.log(`\nfinished downloading, delete to ${audioOutput}`);
//     });
//     fs.unlink(videoOutput, (err) => {
//       if (err) console.error(err);
//       else console.log(`\nfinished downloading, delete to ${videoOutput}`);
//     });
//   });
