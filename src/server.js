import { GraphQLServer } from "graphql-yoga";
import schema from "./scheme";
import naver from "./naver";
import cors from "cors";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
});

server.express.use(cors());

server.express.get("/api", (req, res) => {
  res.json({ data: "success" });
  res.end();
});

server.express.get("/api/start", async (req, res) => {
  try {
    const result = await naver();
    res.json({ data: result });
    res.end();
  } catch (error) {
    res.json({ data: "SOMETHING ERROR" });
    res.end();
  }
});

server.start({ port: PORT }, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
