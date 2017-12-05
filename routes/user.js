const Router = require("express-promise-router");
const db = require("../db");

const router = new Router();
module.exports = router;

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE userId = $1", [id], (err, response) => {
    if (err) {
      return next(err);
    }
    res.render("user", { userName: response.rows[0].username });
  });
});
