const Conversation = require("./conversation");
const UserConversation = require("./userConversation");
const User = require("./user");
const Message = require("./message");
const Recipient = require("./recipient");

// associations

User.hasMany(UserConversation);
User.hasMany(Message);
Conversation.belongsToMany(User, { through: UserConversation });
User.belongsToMany(Conversation, { through: UserConversation });
User.hasMany(Recipient);
Message.belongsTo(User);
Recipient.belongsTo(User);
Message.hasMany(Recipient);
Recipient.belongsTo(Message);

module.exports = {
  User,
  Conversation,
  Message,
  UserConversation,
  Recipient,
};
