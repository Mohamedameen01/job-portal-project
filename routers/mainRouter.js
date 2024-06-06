import express from "express";
import {
  getAboutPage,
  getContactPage,
  getHomePage,
} from "../controllers/mainController.js";

const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);

export default router;
