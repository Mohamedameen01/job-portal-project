import { FaRegChartBar } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbReportSearch, TbBadge } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiBuildingOffice } from "react-icons/pi";
import { FaRegFileArchive } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { BsSuitcaseLg } from "react-icons/bs";

import datingApp from "/assets/images/datingapp.jpg";
import matrimonyApp from "/assets/images/matrimony.jpg";
import jobportalApp from "/assets/images/jobportal.jpg";
import studyabroadApp from "/assets/images/study-abroad/studyabroad.jpg";
import ecommerceApp from "/assets/images/ecommerce.jpg";

export const adminNavLinks = [
  {
    path: "administrator/statistics",
    text: "Statistics",
    icon: <FaRegChartBar />,
    url: "statistics",
  },
  {
    path: "administrator/companies",
    text: "Companies",
    icon: <GrOrganization />,
    url: "companies",
  },
  {
    path: "administrator/jobs",
    text: "Jobs",
    icon: <MdOutlineWorkOutline />,
    url: "jobs",
  },
  {
    path: "administrator/users",
    text: "Users",
    icon: <FiUsers />,
    url: "users",
  },
  {
    path: "administrator/reports",
    text: "Reports",
    icon: <TbReportSearch />,
    url: "reports",
  },
  {
    path: "administrator/settings",
    text: "Settings",
    icon: <IoSettingsOutline />,
    url: "settings",
  },
];

export const employeeLinks = [
  {
    path: "/job-portal/employee",
    text: "home",
    icon: <AiOutlineHome />,
    url: "",
  },
  {
    path: "/job-portal/employer",
    text: "employer",
    icon: <PiBuildingOffice />,
    url: "employer",
  },
  {
    path: "/job-portal/employee/jobs",
    text: "find jobs",
    icon: <MdOutlineWorkOutline />,
    url: "employee/jobs",
  },
  {
    path: "/job-portal/employee/companies",
    text: "companies",
    icon: <GrOrganization />,
    url: "employee/companies",
  },
  {
    path: "/job-portal/employee/saved-jobs",
    text: "saved",
    icon: <IoBookmarkOutline />,
    url: "employee/saved",
  },
  {
    path: "/job-portal/employee/notifications",
    text: "notifications",
    icon: <IoMdNotificationsOutline />,
    url: "employee/notifications",
  },
];

export const apps = [
  {
    title: "Dating App",
    caption: "Find your perfect match and connect with singles around you.",
    image: datingApp,
  },
  {
    title: "Matrimony",
    caption: "Discover your life partner with our trusted matrimony service.",
    image: matrimonyApp,
  },
  {
    title: "Job Portal",
    caption: "Explore job opportunities and advance your career.",
    image: jobportalApp,
  },
  {
    title: "Study Abroad",
    caption: "Plan your education abroad with our comprehensive guidance.",
    image: studyabroadApp,
  },
  {
    title: "E-Commerce",
    caption: "Shop the latest products and enjoy exclusive deals.",
    image: ecommerceApp,
  },
];

export const employerSideBarLinks = [
  {
    path: "/job-portal/employer",
    text: "home",
    icon: <AiOutlineHome />,
    url: "",
  },
  {
    path: "/job-portal/employee",
    text: "employee",
    icon: <BsPersonWorkspace />,
    url: "job-portal/employee",
  },
  {
    path: "/job-portal/employer/candidates",
    text: "candidates",
    icon: <FiUsers />,
    url: "job-portal/employer/candidates",
  },
  {
    path: "/job-portal/employer/companies",
    text: "companies",
    icon: <GrOrganization />,
    url: "job-portal/employer/companies",
  },
  {
    path: "/job-portal/employer/saved-candidates",
    text: "saved",
    icon: <IoBookmarkOutline />,
    url: "job-portal/employer/saved",
  },
  {
    path: "/job-portal/employer/notifications",
    text: "notifications",
    icon: <IoMdNotificationsOutline />,
    url: "job-portal/employer/notifications",
  },
];

export const employerDashboardLinks = [
  {
    path: "/job-portal/employer/dashboard",
    text: "dashboard",
    icon: <AiOutlineHome />,
  },
  {
    path: "/job-portal/employer/dashboard/company-profile",
    text: "company profile",
    icon: <FiUsers />,
  },
  {
    path: "/job-portal/employer/dashboard/post-job",
    text: "post a new job",
    icon: <CiPaperplane />,
  },
  {
    path: "/job-portal/employer/dashboard/manage-jobs",
    text: "manage-jobs",
    icon: <MdOutlineWorkOutline />,
  },
  {
    path: "/job-portal/employer/dashboard/all-applicants",
    text: "all applicants",
    icon: <FaRegFileArchive />,
  },
  // {
  //   path: "/employer/dashboard/shortlisted-resumes",
  //   text: "shortlisted resumes",
  //   icon: <IoBookmarkOutline />,
  // },
  {
    path: "/job-portal/employer/dashboard/messages",
    text: "messages",
    icon: <RiMessage2Line />,
  },
  // {
  //   path: "/employer/dashboard/notifications",
  //   text: "notifications",
  //   icon: <IoMdNotificationsOutline />,
  // },
];

export const employeeDashboardLinks = [
  {
    path: "/job-portal/employee/dashboard",
    text: "dashboard",
    icon: <AiOutlineHome />,
  },
  {
    path: "/job-portal/employee/dashboard/profile",
    text: "profile",
    icon: <FiUsers />,
  },
  {
    path: "/job-portal/employee/dashboard/resume",
    text: "resume",
    icon: <FaRegFileArchive />,
  },
  {
    path: "/job-portal/employee/dashboard/applied-jobs",
    text: "applied jobs",
    icon: <BsSuitcaseLg />,
  },
  {
    path: "/job-portal/employee/dashboard/bookmarked-jobs",
    text: "bookmarked jobs",
    icon: <IoBookmarkOutline />,
  },
  {
    path: "/job-portal/employee/dashboard/messages",
    text: "messages",
    icon: <RiMessage2Line />,
  },
  // {
  //   path: "/job-portal/employee/dashboard/notifications",
  //   text: "notifications",
  //   icon: <IoMdNotificationsOutline />,
  // },
];
