import "./env";
import { GraphQLServer } from "graphql-yoga";
import schema from "./scheme";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";

import { brs, error, init, reLaunch } from "./crwaling/browser";

import path from "path";
/*
 ========================mongo DB
 */

/*
 ========================Server setting &&  MiddleWare
 */

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, brs, error, init, reLaunch }),
});

server.express.use(cors());
server.express.use(bodyParser.json());
server.express.use(bodyParser.urlencoded({ extended: true }));
server.express.use(cookieParser());

server.express.use("/api/test", require("./router/test"));

server.express.use(express.static("public"));
server.express.get("/download/*", (req, res) => {
  console.log("try download serve...");
  if (req) {
    const fileName = path.basename(req.url);
    //console.log(decodeURIComponent(fileName));
    res.download(
      path.join(__dirname, "../public/", decodeURIComponent(fileName))
    );
  } else {
    res.end();
  }
});

server.start({ port: PORT }, () => {
  console.log(`✔ Server is running on http://localhost:${PORT}`);
});
