const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");
const { Op } = require("sequelize");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender, seen } = req.body;

    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      const message = await Message.create({ senderId, text, conversationId, seen });
      return res.json({ message, sender });
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
      seen,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put("/update", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { conversation } = req.body;
    await Message.update({
      seen: true,
    }, {
      where: {
        conversationId: conversation.id,
        seen: false,
        senderId: {
          [Op.not]: req.user.id,
        },
      },
      fields: ["seen"],
      returning: true,
    });
    res.json("successful");
  } catch (error) {
    next(error);
  }
});

router.put("/update/:messsageId", async (req, res, next) => {
  try {
    const { messsageId } = req.params;
    await Message.update({ read: true }, { where: { id: messsageId }});
    res.json("successful");
  } catch(error) {
    next(error)
  }
});

module.exports = router;
