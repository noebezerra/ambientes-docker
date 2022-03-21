import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Olá Mundo!");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá POSS");
});

app.listen(3000, () => console.log("Server is running"));
