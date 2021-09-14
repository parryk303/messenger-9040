const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given multiple user Ids

  Conversation.findConversation = async function (users) {
    const userIds = {};
      value = users.map((user, i=1) => {
        return `user${i}Id`;
      }).map(key => {
        return where[value] = { [Op.or]: [...users] }
      });
      const conversation = await Conversation.findOne({
        where: userIds
      });

    // return conversation or null if it doesn't exist
    return conversation;
};

module.exports = Conversation;
