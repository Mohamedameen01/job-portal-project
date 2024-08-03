import express from "express";

import {
  getOtherUsers,
  setUserInfoForm,
  setUserRoleSelection,
} from "../controllers/user.controller.js";
import { authenticate } from "../../../middleware/auth.middleware.js";

const router = express.Router();

// checking user logged in or user token expired:
router.use(authenticate);

router.post("/info-form", setUserInfoForm);
router.post("/role", setUserRoleSelection);
router.get("/other-users", getOtherUsers);

export default router;
