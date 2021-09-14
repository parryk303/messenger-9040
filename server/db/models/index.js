const Conversation = require("./conversation");
const UserConversation = require("./userConversation");
const User = require("./user");
const Message = require("./message");
const Recipient = require("./recipient");

// associations

User.hasMany(UserConversation);
User.hasMany(Message);
User.hasMany(Recipient);
UserConversation.belongsTo(User);
Message.belongsTo(User);
Recipient.belongsTo(User);
Conversation.hasMany(UserConversation);
UserConversation.belongsTo(Conversation);
Message.hasMany(Recipient);
Recipient.belongsTo(Message);

module.exports = {
  User,
  Conversation,
  Message,
  UserConversation,
  Recipient,
};
