import React from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

function AdminHeader({ handleSideBar, showSideBar }) {
  return (
    <header className="bg-[#8B93FF] text-[#FFF7FC]">
      <nav className="h-16 mx-2 grid grid-cols-6 items-center">
        <div className="text-center">
          <h1>Admin Panel</h1>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleSideBar(!showSideBar)}
        >
          <CiMenuBurger />
        </div>
        <div className="col-span-2 text-end ">
          <h2>Dashboard</h2>
        </div>
        <div className="col-span-2 text-end">
          <Link to={"/"}>Logout</Link>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
