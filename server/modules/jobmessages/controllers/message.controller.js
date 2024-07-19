import Conversation from "../../../models/conversation.schema.js";
import Message from "../../../models/message.schema.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    // const senderId = req.user;

    const senderId = "669a9a834538f8ae7bb34b1b";
    const { message } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // this will help to run parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Message Error", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
