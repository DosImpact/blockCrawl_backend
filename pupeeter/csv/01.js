import fs from "fs";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify";
import path from "path";

console.log(path.join(__dirname, "../data", "movies.csv"));

let result = [];
const csv = fs.readFileSync(path.join(__dirname, "../data", "movies.csv"));
const rows = parse(csv.toString("utf-8"));
// console.log(rows);

Array.from(rows).forEach((row) => {
  console.log(row);
  //   result =
});
