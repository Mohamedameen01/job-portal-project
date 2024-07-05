import { FaRegChartBar } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBusinessOutline } from "react-icons/io5";

import datingApp from "/assets/datingapp.jpg";
import matrimonyApp from "/assets/matrimony.jpg";
import jobportalApp from "/assets/jobportal.jpg";
import studyabroadApp from "/assets/studyabroad.jpg";
import ecommerceApp from "/assets/ecommerce.jpg";

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
    path: "/employee",
    text: "home",
    icon: <AiOutlineHome />,
    url: "",
  },
  {
    path: "/employer",
    text: "employer",
    icon: <IoBusinessOutline />,
    url: "employer",
  },
  {
    path: "/employee/find-jobs",
    text: "find jobs",
    icon: <MdOutlineWorkOutline />,
    url: "employee/findjobs",
  },
  {
    path: "/employee/companies",
    text: "companies",
    icon: <GrOrganization />,
    url: "employee/companies",
  },
  {
    path: "/employee/saved-jobs",
    text: "saved",
    icon: <IoBookmarkOutline />,
    url: "employee/saved",
  },
  {
    path: "/employee/notifications",
    text: "notifications",
    icon: <IoMdNotificationsOutline />,
    url: "employee/notifications",
  },
];

export const apps = [
  {
    title: "Dating App",
    caption: "Find your perfect match and connect with singles around you.",
    link: "",
    image: datingApp,
  },
  {
    title: "Matrimony",
    caption: "Discover your life partner with our trusted matrimony service.",
    link: "",
    image: matrimonyApp,
  },
  {
    title: "Job Portal",
    caption: "Explore job opportunities and advance your career.",
    link: "/signin",
    image: jobportalApp,
  },
  {
    title: "Study Abroad",
    caption: "Plan your education abroad with our comprehensive guidance.",
    link: "",
    image: studyabroadApp,
  },
  {
    title: "E-Commerce",
    caption: "Shop the latest products and enjoy exclusive deals.",
    link: "",
    image: ecommerceApp,
  },
];
