const express = require("express");
const app = express();

const PORT = process.env.PORT || 8877;

app.get("/about", (req, res) => {
  res.json({
    name: "Alberto",
    email: "antonioalbertodsb@gmail.com",
    urls: [
      { type: "github", url: "https://github.com/antonioalberto-dev" },
      { type: "discord", url: "alberto.dev" },
    ],
  });
});

app.get("/", (req, res) => {
  res.json({
    msg: "successful",
  });
});

app.listen(PORT, () => {
  console.log("Porta: " + PORT);
});
