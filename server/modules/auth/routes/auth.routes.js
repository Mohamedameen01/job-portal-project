import express from "express";

import {
  googleLogin,
  login,
  mobileSignin,
  mobileVerify,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);
router.post("/google-signin", googleLogin);
router.post("/mobile-verification", mobileVerify);
router.post("/mobile-signin", mobileSignin);

export default router;
