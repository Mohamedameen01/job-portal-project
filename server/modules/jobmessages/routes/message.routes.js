import express from "express";
import {
  getMessages,
  getUserUnreadMessages,
  markAllMessageAsRead,
  markMessageAsRead,
  sendMessage,
} from "../controllers/message.controller.js";
import { authenticate } from "../../../middleware/auth.middleware.js";

const router = express.Router();

router.use(authenticate);

router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);
router.get("/:id/unread", getUserUnreadMessages);
router.post("/:id/read", markMessageAsRead);
router.post("/read", markAllMessageAsRead);

export default router;
