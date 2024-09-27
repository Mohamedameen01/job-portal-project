import express from "express";
import { authenticate } from "../../../middleware/auth.middleware.js";
import {
  getAllCandidates,
  getAllInfos,
  getAllPostedJobs,
  getOtherCompanies,
  getSelectedCandidate,
  getSelectedCompany,
  postNewJob,
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
router.post("/new-job-post", postNewJob);
router.get("/get-posted-jobs", getAllPostedJobs);

router.get("/all-candidates", checkEmployerRole, getAllCandidates);
router.get("/selected-candidate/:id", checkEmployerRole, getSelectedCandidate);
router.get("/other-companies", checkEmployerRole, getOtherCompanies);
router.get("/selected-company/:id", checkEmployerRole, getSelectedCompany)

export default router;
