const express = require("express");
const router = express.Router();

// messageAPI
const messageAPI = require("./message.api");
router.use("/messages", messageAPI);

module.exports = router;
