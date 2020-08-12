const router = require("express").Router();
const authentication = require("../../authentication");

// Matches with "/api/test"
router.route("/").get(authentication.validateAccessToken, (req, res, next) => {
  res.status(200).send({
    ok: true,
    message: "Test Route",
  });
});

module.exports = router;
