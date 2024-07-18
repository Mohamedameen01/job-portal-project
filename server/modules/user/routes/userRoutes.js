import express from "express";

import {
  setUserInfoForm,
  setUserRoleSelection,
} from "../controllers/userController.js";
import { authenticate } from "../../../middleware/authMiddleware.js";

const router = express.Router();

// checking user logged in or user token expired:
router.use(authenticate);

router.post("/info-form", setUserInfoForm);
router.post("/role", setUserRoleSelection);
export default router;
