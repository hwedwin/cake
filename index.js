const express = require("express");
const mountRoutes = require("./routes");

const app = express();
app.set("views", __dirname + "/pages");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
mountRoutes(app);
app.get("/", (req, res) => {
  res.render("index", { name: "Home" });
});
app.listen(3000);
