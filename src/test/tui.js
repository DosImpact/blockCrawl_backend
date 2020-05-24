const readline = require("readline");

const onProgress = (chunkLength, downloaded, total) => {
  const percent = downloaded / total;
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
  process.stdout.write(
    `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
      total /
      1024 /
      1024
    ).toFixed(2)}MB)${downloaded >= total ? "...✅" : ""} `
  );
};

for (let i = 0; i <= 31000000; i += 1000) {
  onProgress(10, i, 31000000);
}
