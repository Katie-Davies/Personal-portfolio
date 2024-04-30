// server/server.ts
import * as Path from "node:path";
import express from "express";
import cors from "cors";
var server = express();
server.get("/api/v1/greeting", (req, res) => {
  const greetings = ["hola", "hi", "hello", "howdy"];
  const index = Math.floor(Math.random() * greetings.length);
  console.log(index);
  res.json({ greeting: greetings[index] });
});
server.use(express.json());
server.use(cors("*"));
if (process.env.NODE_ENV === "production") {
  server.use(express.static(Path.resolve("public")));
  server.use("/assets", express.static(Path.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var port = process.env.PORT || 3e3;
server_default.listen(port, function() {
  console.log("Listening on port", port);
});
