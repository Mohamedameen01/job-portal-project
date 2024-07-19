import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { authenticate } from "../../../middleware/auth.middleware.js";

const router = express.Router();

// router.use(authenticate);

router.post("/send/:id", sendMessage);

export default router;
