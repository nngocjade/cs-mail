const express = require("express");
const router = express.Router();

/**
 * @route GET api/messages?page=1&limit=10
 * @description Get messages with pagination
 * @access Public
 */

router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Cs Mail" });
});

module.exports = router;
