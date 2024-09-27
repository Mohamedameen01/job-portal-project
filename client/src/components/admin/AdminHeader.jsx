import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

function AdminHeader({ handleSideBar, showSideBar }) {
  const handleMenuButton = () => {
    handleSideBar(!showSideBar);
  };

  return (
    <header className="bg-customBgColor ">
      <nav className="h-16 max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="md:w-1/3 lg:w-1/5 px-2 flex justify-between items-center">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-customViolet">
              Admin Panel
            </h1>
          </div>
          <div
            className="hidden md:block w-fit p-2 bg-[#ede7f6] hover:bg-customViolet text-xl text-customViolet  hover:text-[#ffffff] rounded-md cursor-pointer "
            onClick={handleMenuButton}
          >
            <TiThMenu />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="block md:hidden w-fit p-2 bg-[#ede7f6] hover:bg-customViolet text-lg text-customViolet  hover:text-[#ffffff] rounded-md cursor-pointer "
            onClick={handleMenuButton}
          >
            <TiThMenu />
          </div>
          <div className="mr-4 p-2 bg-[#ede7f6] hover:bg-customViolet text-lg md:text-xl text-customViolet hover:text-[#ffffff] rounded-md hover:cursor-pointer">
            <RiLogoutBoxLine />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
