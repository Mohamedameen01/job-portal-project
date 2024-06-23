import express from "express";
import {
  loginEmployee,
  registerEmployee,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/employee/signin", loginEmployee);
router.post("/employee/signup", registerEmployee);

export default router;
