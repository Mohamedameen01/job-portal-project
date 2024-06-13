import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function CompanyDetailsHeader({ title }) {
  return (
    <div className=" flex gap-3 p-5 capitalize bg-[#e3f2fd] rounded-md">
      <div>
        <img
          alt="logo"
          loading="lazy"
          width={100}
          height={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEXJ0359-Zqi0CMO-Ri01GTJ8jgow2PfWIg&s"
        />
      </div>
      <div className="grid grid-rows-3 ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex gap-3 text-[#00000080]">
          <div className="flex  items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <p>calicut,kerala</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <IoBagHandleOutline />
            </span>
            <p>accounting/finance</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <MdOutlineLocalPhone />
            </span>
            <p>1234567890</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <MdOutlineMailOutline />
            </span>
            <p>info@gmail.com</p>
          </div>
        </div>
        <p>open jobs - 15</p>
      </div>
    </div>
  );
}

export default CompanyDetailsHeader;
