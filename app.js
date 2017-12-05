const express = require("express");
const mountRoutes = require("./routes");

const app = express();
mountRoutes(app);
app.get("/", (req, res) => {
  res.send("home");
});
app.listen(3000);
