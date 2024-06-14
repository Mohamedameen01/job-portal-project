import { FaRegChartBar } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

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
