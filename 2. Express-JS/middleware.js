const express = require("express");
const app = express();

// define middleware function
const myFirstMiddlewareFunction = (req, res, next) => {
  console.log("This first middleware will run on every request");

  next();
};

app.use(myFirstMiddlewareFunction);

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
