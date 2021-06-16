const express = require("express");
const app = express();
var cors = require("cors");

const port = 3001;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-47299944604090-061216-ac0e08a97ecf151cc7e0b526eba76c62-57260326",
});

app.get("/", (req, res) => {
  mercadopago.preferences.get().then((response) => {
    console.log(response);
  });
  res.send("Hello World!");
});

app.post("/checkout", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3000/cart",
      failure: "http://localhost:3000/cart",
      pending: "http://localhost:3000/cart",
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({ id: response.body.id });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Mercado Pago app listening at http://localhost:${port}`);
});
