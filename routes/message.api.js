const express = require("express");
const router = express.Router();

/**
 * @route POST api/messages/
 * @description User can send message
 * @access Public
 */

/**
 * @route PUT api/messages/
 * @description User can update content of message
 * @access Public
 */

/**
 * @route GET api/messages?page=1&limit=10
 * @description Get messages with pagination
 * @access Public
 */
router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Cs Mail" });
});

/**
 * @route GET api/messages/:id
 * @description User can read message detail
 * @access Public
 */

module.exports = router;
