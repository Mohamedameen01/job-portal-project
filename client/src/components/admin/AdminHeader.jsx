import React from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
function AdminHeader({ handleSideBar, showSideBar }) {
  const handleMenuButton = () => {
    handleSideBar(!showSideBar);
  };

  return (
    <header className=" ">
      <nav className="h-16 mx-2 grid grid-cols-6 items-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-[#000000]">Admin Panel</h1>
        </div>
        <div
          className="cursor-pointer w-fit p-2 bg-[#ede7f6] text-[#673ab7] hover:bg-[#673ab7] hover:text-[#ffffff] rounded-md "
          onClick={handleMenuButton}
        >
          <TiThMenu />
        </div>
        <div className="col-span-4 text-end">
          <Link to={"/"}>Logout</Link>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
