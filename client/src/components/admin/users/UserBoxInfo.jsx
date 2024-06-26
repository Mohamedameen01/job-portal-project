import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiSandsOfTime } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { HiMiniLanguage } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

function UserBoxInfo() {
  return (
    <div>
      <div className="h-fit bg-[#e3f2fd] p-4">
        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <SlCalender />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Experience:</h3>
            <p className="text-sm">0-2 years</p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <GiSandsOfTime />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Age:</h3>
            <p className="text-sm">28</p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <GrMoney />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Current Sallary:</h3>
            <p className="text-sm">11k - 15k</p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <FaMoneyBill1Wave />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Expected Sallary:</h3>
            <p className="text-sm">26k - 33k </p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <IoPersonOutline />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Gender:</h3>
            <p className="text-sm">Male</p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <HiMiniLanguage />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Language:</h3>
            <p className="text-sm">English, Hindi, Malayalam</p>
          </div>
        </div>

        <div className="my-4 ms-2 flex items-start gap-3 ">
          <div className="mt-1 text-lg text-blue-600">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-md font-medium mb-2">Education Level:</h3>
            <p className="text-sm">Master Degree</p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[#e3f2fd] p-4 flex justify-between">
        <h1 className="text-md font-medium">Social media</h1>
        <div className="flex items-center gap-1 text-lg font-medium">
          <AiOutlineInstagram />
          <TiSocialFacebook />
          <TiSocialLinkedin />
        </div>
      </div>
    </div>
  );
}

export default UserBoxInfo;
