const utilsHelper = require("../helpers/utils.helper");
const Message = require("../models/Message");
const User = require("../models/User");
const messageController = {};

// SEND/POST A MESSAGE
messageController.sendMessage = async (req, res, next) => {
  try {
    const { from, to, title, body } = req.body;
    let sender = await User.findById(from);
    let receiver = await User.findOne({ email: to });
    if (!sender || !receiver) return next(new Error("404 - User not defined"));
    console.log(receiver);
    const message = await Message.create({
      from,
      to: receiver._id,
      title,
      body,
    });
    utilsHelper.sendResponse(res, 200, true, { message }, null, "Message sent");
  } catch (error) {
    next(error);
  }
};

// UPDATE MESSAGE
messageController.updateMessage = async (req, res, next) => {
  try {
    const currentUserId = req.userId;
    const message = req.body;

    if (!message._id) return next(new Error("404 - Message not found"));
    let msg = await Message.findOneAndUpdate(
      { _id: message._id },
      { ...message },
      { new: true }
    );
    if (!msg) return next(new Error("404 - Message not found"));

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { msg },
      null,
      "Update Message success"
    );
  } catch (error) {
    next(error);
  }
};

// GET LIST OF MESSAGES
messageController.getListOfMessage = async (req, res, next) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalMessages = await Message.countDocuments();
    const totalPages = Math.ceil(totalMessages / limit);
    const offset = limit * (page - 1);

    const messages = await Message.find({})
      .skip(offset)
      .limit(limit)
      .populate("from")
      .populate("to");

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { messages, totalPages },
      null,
      "Get all message"
    );
  } catch (error) {
    next(error);
  }
};

// GET A SINGLE MESSAGE
messageController.getSingleMessage = async (req, res, next) => {
  try {
    const msgId = req.params.id;
    let message = await Message.findById(msgId);

    if (!message) return next(new Error("404 - Message not found"));
    message = await Message.findById(msgId).populate("from").populate("to");
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { message },
      null,
      "Get single message"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = messageController;
