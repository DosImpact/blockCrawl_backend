import fs from "fs";
import path from "path";
import axios from "axios";

/*
header list
content list
with new file ( auto save with now Date filename )
or
with existed file 

*/

export const saveToCSV = async (headerList, contentList) => {};

export const makeNewFolder = async () => {
  const setStorage = async () => {
    const dirName = Date.now();
    await fs.readFile(`output/${dirName}`, (e) => {
      if (e) {
        fs.mkdir(`output/${dirName}`, () => {
          console.log(`✔ 폴더 생성 /output/${dirName} `);
          return dirName;
        });
      }
    });
  };
  const resultFileName = setStorage();

  return resultFileName;
};

export const checkFolder = async (name) => {
  const setStorage = async () => {
    const dirName = name;
    await fs.readFile(`output/${dirName}`, (e) => {
      if (e) {
        fs.mkdir(`output/${dirName}`, () => {
          console.log(`✔ 폴더 생성 /output/${dirName} `);
          return dirName;
        });
      }
    });
  };
  const resultFileName = setStorage();

  return resultFileName;
};

export const saveWithImageURL = async (
  url,
  folderName = "sample",
  filename = `_${Date.now()}`
) => {
  await checkFolder(folderName);
  //   const dummyURL =
  // "https://img.alicdn.com/imgextra/i4/333626664/O1CN01vqcb5w1z69xkigdZI_!!333626664.jpg";
  //   url = dummyURL;
  if (url) {
    const imgResult = await axios.get(url, { responseType: "arraybuffer" });
    fs.writeFile(`output/${folderName}/${filename}.jpg`, imgResult.data, () => {
      console.log(`✔ save [${url}] > [output/$${folderName}/${filename}]`);
      return true;
    });
  }
  return false;
};
