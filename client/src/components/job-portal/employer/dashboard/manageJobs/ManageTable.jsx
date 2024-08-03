import React from "react";

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

import CommentButtons from "../CommentButtons";

import companylog from "/assets/images/upworklogo.png";
import { manageJobTableData } from "../../../../../utils/table-datas";

function ManageTable() {
  const tableHead = [
    "Title",
    "Applications",
    "Selected",
    "Created & Expired",
    "Status",
    "Action",
  ];
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
      <tbody>
        {manageJobTableData.map((item) => (
          <tr key={item.id} className="text-sm text-center">
            <td className="ps-3 py-3 flex gap-2">
              <img width={45} height={45} src={companylog} alt="company-logo" />
              <p className="mt-1 font-semibold">{item.job}</p>
            </td>
            <td className="py-3 text-blue-600 font-semibold underline cursor-pointer">
              {item.applicants} Applied
            </td>
            <td>{item.selected}</td>
            <td className="py-3">
              <p>{item.createdAt}</p>
              <p>{item.expiredAt}</p>
            </td>
            <td
              className={`py-3 font-semibold ${
                item.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.status}
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
