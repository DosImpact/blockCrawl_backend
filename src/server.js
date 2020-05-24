import "./env";
import { GraphQLServer } from "graphql-yoga";
import schema from "./scheme";
import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
});

server.express.use(cors());
server.express.use(express.static("public"));

server.start({ port: PORT }, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
