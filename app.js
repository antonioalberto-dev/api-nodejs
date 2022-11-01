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
      { type: "twitter", url: "@alberto.dev" },
    ],
  });
});

app.get("/", (req, res) => {
  res.json({
    msg: "successful",
  });
});

app.get("/products", (req, res) => {
  res.json({
    supermercado: [
      {
        shortName: "Novinha",
        logo: "https://redesmart-logos.s3.amazonaws.com/resized/18414517000192-logo.jpeg",
        tla: "nvh",
        produtos: [
          {
            desc: "Leite em pó",
            preco: "3.50",
            type: "a",
          },
          {
            desc: "Arroz",
            preco: "4.34",
            type: "a",
          },
          {
            desc: "Feijão",
            preco: "8.40",
            type: "a",
          },
          {
            desc: "Farinha de trigo",
            preco: "6.23",
            type: "a",
          },
          {
            desc: "Batata",
            preco: "6.00",
            type: "v",
          },
          {
            desc: "Tomate",
            preco: "7.69",
            type: "v",
          },
          {
            desc: "Pão francês",
            preco: "8.40",
            type: "a",
          },
          {
            desc: "Café",
            preco: "9.00",
            type: "a",
          },
          {
            desc: "Banana",
            preco: "8.40",
            type: "f",
          },
          {
            desc: "Açucar",
            preco: "3.49",
            type: "a",
          },
        ],
      },
      {
        shortName: "DM",
        logo: null,
        tla: "dm",
        produtos: [],
      },
      {
        shortName: "Ouro Verde",
        logo: null,
        tla: "ov",
        produtos: [],
      },
      {
        shortName: "Ica",
        logo: null,
        tla: "ica",
        produtos: [],
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log("Porta: " + PORT);
});
