import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoTrendingUpSharp } from "react-icons/io5";

function FeatureSection() {
  return (
    <div className="my-5">
      <h2 className="text-3xl font-bold ">Why choose us?</h2>
      <div className="my-5 grid md:grid-cols-2 gap-5">
        <div className="py-4 flex gap-4 border shadow-md">
          <div className="w-1 h-full bg-orange-500"></div>
          <div className="w-12 h-12 flex items-center justify-center bg-orange-200 text-orange-500 text-2xl rounded-full">
            <FaGlobe />
          </div>
          <h5 className="text-lg font-bold tracking-wider capitalize">
            supportive environment
          </h5>
        </div>
        <div className="py-4 flex gap-4 border shadow">
          <div className="w-1 h-full bg-blue-500"></div>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-200 text-blue-500 text-2xl rounded-full">
            <FaUsers />
          </div>
          <h5 className="text-lg font-bold tracking-wider capitalize">
            student-friendly policies
          </h5>
        </div>
        <div className="py-4 flex gap-4 border shadow">
          <div className="w-1 h-full bg-green-500"></div>
          <div className="w-12 h-12 flex items-center justify-center bg-green-200 text-green-500 text-2xl rounded-full">
            <FaGraduationCap />
          </div>
          <h5 className="text-lg font-bold tracking-wider capitalize">
            quality higher educations
          </h5>
        </div>
        <div className="py-4 flex gap-4 border shadow">
          <div className="w-1 h-full bg-[#ffc107]"></div>
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-200 text-[#ffc107] text-2xl rounded-full">
            <IoTrendingUpSharp />
          </div>
          <h5 className="text-lg font-bold tracking-wider capitalize">
            opportunities for growth
          </h5>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
