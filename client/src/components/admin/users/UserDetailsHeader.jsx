import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

function UserDetailsHeader({ userInfo }) {
  const skills = ["App", "Design", "Digital"];
  return (
    <div className=" flex items-center gap-3 p-5 capitalize bg-[#e3f2fd] rounded-lg">
      <div>
        <img
          alt="logo"
          loading="lazy"
          width={100}
          height={100}
          className="rounded-full object-cover"
          src={userInfo?.photo}
        />
      </div>
      <div className="grid grid-rows-3 ">
        <h1 className="text-2xl font-semibold">{userInfo?.name}</h1>
        <div className="flex gap-4 text-[#00000080] text-sm">
          <div className="flex items-center gap-1">
            <p className="text-blue-600">UI Designer</p>
          </div>
          <div className="flex  items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <p>{userInfo?.address}</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <GoClock />
            </span>
            <p>{userInfo?.createdAt}</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FaMoneyBill1Wave />
            </span>
            <p>5.1LPA</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 subpixel-antialiased text-xs">
          {skills.map((item) => (
            <p
              key={item}
              className="bg-blue-200 text-md text-blue-700 px-3 py-1 rounded-2xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-900">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default UserDetailsHeader;
