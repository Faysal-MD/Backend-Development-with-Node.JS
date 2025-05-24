const express = require("express");
const app = express();

// root route
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// ge all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
  ];

  res.json(products);
});

// get a single product
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product isn't found!!");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
