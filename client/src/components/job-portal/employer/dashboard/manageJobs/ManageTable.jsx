import React from "react";

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

import CommentButtons from "../CommentButtons";

import companylogo from "/assets/images/upworklogo.png";
import { useSelector } from "react-redux";

function ManageTable() {
  const tableHead = [
    "Title",
    "Applications",
    "Selected",
    "Created & Expired",
    "Status",
    "Action",
  ];
  const { postedJobs, employerInfo} = useSelector((state) => state.employer);
  
  return (
    <table className="w-max lg:w-full capitalize ">
      <thead>
        <tr className="bg-customBgColor text-center text-blue-500 text-sm font-semibold">
          {tableHead.map((item, index) => (
            <th
              key={index}
              className={`px-3 py-3 ${index === 0 ? "text-start" : ""}`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-x-auto custom-scrollbar">
        {postedJobs?.map((job, index) => (
          <tr key={index} className="text-sm text-center">
            <td className="ps-3 py-3 flex gap-2">
              <img width={45} height={45} src={employerInfo.companylogo ? employerInfo.companylogo : companylogo} alt="company-logo" />
              <p className="mt-1 font-semibold">{job.title}</p>
            </td>
            <td className="py-3 text-blue-600 font-semibold underline cursor-pointer">
              {job.applicants} Applied
            </td>
            <td>{job.selected}</td>
            <td className="py-3">
              <p>{job.createdAt}</p>
              <p>{job.expiredAt}</p>
            </td>
            <td
              className={`py-3 font-semibold ${
                job.status ? "text-green-500" : "text-red-500"
              }`}
            >
              {job.status}
            </td>
            <td className="pr-2 py-3 flex justify-center gap-2">
              <CommentButtons
                icon={<IoEyeOutline />}
                text={"View Application"}
              />
              <CommentButtons
                icon={<MdOutlineModeEdit />}
                text={"Edit Application"}
              />
              <CommentButtons
                icon={<MdOutlineDeleteOutline />}
                text={"Delete Application"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ManageTable;
