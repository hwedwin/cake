const categories = require("./category");
const products = require("./product");
const carts = require("./cart");
const orders = require("./order");
const users = require("./user");

module.exports = app => {
  app.use("/categories", categories);
  app.use("/products", products);
  app.use("/carts", carts);
  app.use("/orders", orders);
  app.use("/users", users);
};
