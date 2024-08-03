import express from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  getAllInfos,
  setBasicInfos,
  setContactInfos,
  setProfileInofos,
  setSocialProfileInfos,
} from "../controllers/employer.controller.js";
import { checkEmployerRole } from "../../../middleware/employer.middleware.js";

const router = express.Router();

router.use(authenticate);

router.post("/basic-infos", checkEmployerRole, setBasicInfos);
router.patch("/profile-infos", checkEmployerRole, setProfileInofos);
router.patch(
  "/social-profiles-infos",
  checkEmployerRole,
  setSocialProfileInfos
);
router.patch("/contact-infos", checkEmployerRole, setContactInfos);
router.get("/all-infos", checkEmployerRole, getAllInfos);

export default router;
