import React from "react";
import { IoMdSearch } from "react-icons/io";

function AdminPagesHeader({ title }) {
  return (
    <div className="flex justify-between items-center my-3">
      <h1 className="text-xl font-medium mb-3 capitalize">{title}</h1>
      <div className="relative">
        <div className="absolute inset-y-0 inset-x-1 flex items-center text-[#00000080] pointer-events-none">
          <IoMdSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" px-4 py-2 text-sm bg-[#f8fafc] placeholder:text-[#00000080] border-1 border-gray-400 rounded-md  focus:outline-blue-500 focus:ring-blue-500 "
        />
      </div>
    </div>
  );
}

export default AdminPagesHeader;
