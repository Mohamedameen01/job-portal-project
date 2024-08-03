import mongoose from "mongoose";

import Conversation from "../../../models/conversation.schema.js";
import Message from "../../../models/message.schema.js";
import { getReceiverSocketId, io } from "../../../socket/socket.js";
import User from "../../../models/user.schema.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
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

    const recipient = await User.findById(receiverId);
    recipient.unreadMessages.push(newMessage?._id);
    await recipient.save();

    // this will help to run parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //Socket IO Functionality here:
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // io.to(<socket_id) emit() is used to send events to specific client.
      io.to(receiverSocketId).emit("newMessage", newMessage);

      io.to(receiverSocketId).emit("getNotification", newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Message Error", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (
      !mongoose.Types.ObjectId.isValid(receiverId) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      return res
        .status(400)
        .json({ messages: "Invalid Sender or Reciever Id" });
    }

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    return res.status(201).json(messages);
  } catch (error) {
    console.log("Getting Message Error", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUserUnreadMessages = async (req, res) => {
  try {
    const receiverId = req.user._id;

    if (!receiverId) {
      return res.status(400).json({ message: "User Not Found" });
    }

    if (!mongoose.Types.ObjectId.isValid(receiverId)) {
      return res.status(400).json({ message: "Invalid User Id" });
    }

    const user = await User.findById(receiverId)
      .populate("unreadMessages")
      .select("unreadMessages");

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json({ unread: user.unreadMessages });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// For Marking Selected User Messages:
export const markMessageAsRead = async (req, res) => {
  try {
    const { id: senderId } = req.params;
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User Not Found" });
    }

    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      return res.status(400).json({ message: "Invalid Id" });
    }

    const user = await User.findById(userId)
      .populate("unreadMessages")
      .select("unreadMessages");

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const filteredMessages = user.unreadMessages?.filter(
      (message) => message.senderId.toString() !== senderId
    );

    user.unreadMessages = filteredMessages;
    await user.save();

    return res.status(200).json({ unread: filteredMessages });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// For Marking All Unread Messages:
export const markAllMessageAsRead = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "User Not Found" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid Id" });
    }

    const user = await User.findById(userId)
      .populate("unreadMessages")
      .select("unreadMessages");

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    user.unreadMessages = [];
    await user.save();

    return res.status(200).json({ unread: user.unreadMessages });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
