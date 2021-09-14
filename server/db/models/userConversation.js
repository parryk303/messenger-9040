const { Op } = require("sequelize");
const db = require("../db");
const User = require("./user");
const Conversation = require("./conversation");

const UserConversation = db.define("userConversation", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  convoId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = UserConversation;