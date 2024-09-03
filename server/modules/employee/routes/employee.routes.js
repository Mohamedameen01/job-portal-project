import express from "express";

import { checkEmployeeRole } from "../../../middleware/employee.middleware.js";
import { authenticate } from "../../../middleware/auth.middleware.js";
import { getAllCompanies, getAllJobs, getAppliedJobs, getBookMarkedJobs, getCompanyOpenJobs, getFilteredCompanies, getFilteredJobs, getFindHomeJobs, getRelatedJobs, getSelectedCompany, getSelectedJob, setCertificateInfos, setEducationInfos, setExperienceInfos, setJobApplied, setJobBookMarked, setPreferenceInfos, setProjectInfos } from "../controllers/employee.controller.js";

const router = express.Router();

router.use(authenticate);

router.post("/education-infos", checkEmployeeRole, setEducationInfos);
router.post("/experience-infos", checkEmployeeRole, setExperienceInfos);
router.post("/project-infos", checkEmployeeRole, setProjectInfos);
router.post("/certificate-infos", checkEmployeeRole, setCertificateInfos);
router.post("/preference-infos", checkEmployeeRole, setPreferenceInfos);

router.post("/find-home-jobs", checkEmployeeRole, getFindHomeJobs)
router.get("/all-jobs", checkEmployeeRole, getAllJobs );
router.post("/filter-jobs", checkEmployeeRole, getFilteredJobs);
router.get("/job/:id", checkEmployeeRole, getSelectedJob);
router.get("/related-jobs/:id", checkEmployeeRole, getRelatedJobs);

router.get("/all-companies", checkEmployeeRole, getAllCompanies);
router.post("/filter-companies", checkEmployeeRole, getFilteredCompanies);
router.get("/company/:id", checkEmployeeRole, getSelectedCompany);
router.get("/company/open-jobs/:id", checkEmployeeRole, getCompanyOpenJobs);

router.post("/bookmark-job/:id", checkEmployeeRole, setJobBookMarked);
router.post("/apply-job/:id", checkEmployeeRole, setJobApplied);
router.get("/bookmarked-jobs", checkEmployeeRole, getBookMarkedJobs);
router.get("/applied-jobs", checkEmployeeRole, getAppliedJobs);


export default router 