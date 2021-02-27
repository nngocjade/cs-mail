const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

/**
 * @route POST api/users/
 * @description User can register for a new account
 * @access Public
 */
router.post("/", userController.register);

/**
 * @route GET api/users/me
 * @description Return current user info
 * @access Access Token required
 */

/**
 * @route GET api/users/:id/messages
 * @description Return list of messages sent to current user
 * @access Public
 */

module.exports = router;
