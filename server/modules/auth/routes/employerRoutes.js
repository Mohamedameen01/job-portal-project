import express from "express";
import { registerEmployer } from "../controllers/employerController.js";

const router = express.Router();

router.post("/employer/signup", registerEmployer);

export default router;
