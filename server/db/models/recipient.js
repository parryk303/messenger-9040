const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");
const User = require("./user");
const UserConversation = require("./userConversation");

const Recipient = db.define("recipient", {
  messageId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  recipientId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  recipientConvoId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Recipient;