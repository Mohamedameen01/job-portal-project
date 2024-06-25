import express from "express";
import {
  loginEmployee,
  mobileVerifyEmployee,
  registerEmployee,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/employee/signin", loginEmployee);
router.post("/employee/signup", registerEmployee);
router.post("/employee/google-signin");
router.post("/employee//mobile-verification", mobileVerifyEmployee);
router.post("/employee/mobile-signin", mobileVerifyEmployee);

export default router;
