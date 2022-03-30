import express from "express";
import "dotenv/config";

// convert env variable to number or 3000
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.get("/", (req, res) => {
  return res.send("Olá Mundo!");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá POSS");
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
