const Router = require("express-promise-router");
const db = require("../db");

const router = new Router();
module.exports = router;

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM carts WHERE id =$1", id, (err, response) => {
    if (err) {
      return next(err);
    }
    res.render("cart", { cartName: response.rows[0].cartname });
  });
});
