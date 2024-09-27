import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiSandsOfTime } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { PiGraduationCapLight } from "react-icons/pi";
import SmallBox from "../../../SmallBox";
import { useSelector } from "react-redux";

function SingleCandidateSide() {
  const { candidate } = useSelector((state) => state.employer);
  return (
    <div className=" bg-gray-100 p-5 grid gap-4 shadow-md rounded-md">
      <SmallBox
        icon={<SlCalender />}
        title={candidate?.preference?.totalExperience}
      />
      <SmallBox icon={<GiSandsOfTime />} title={candidate?.employeeId?.age} />
      <SmallBox
        icon={<FaMoneyBill1Wave />}
        title={candidate?.preference?.currentCTC}
      />
      <SmallBox
        icon={<FaMoneyBill1Wave />}
        title={candidate?.preference?.expectedCTC}
      />
      {candidate?.preference?.languages?.map((item, index) => (
        <SmallBox key={index} icon={<LiaLanguageSolid />} title={"English"} />
      ))}
      <SmallBox icon={<PiGraduationCapLight />} title={candidate?.employeeId?.highQualification} />
    </div>
  );
}

export default SingleCandidateSide;
