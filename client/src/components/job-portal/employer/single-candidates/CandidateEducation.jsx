import React from "react";
import { useSelector } from "react-redux";

function CandidateEducation() {
  const { candidate } = useSelector((state) => state.employer);
  return (
    <div className="mt-5 grid gap-3">
      <h1 className="text-lg font-semibold tracking-wide">Education</h1>
      {candidate?.education?.map((edu, index) => (
        <div key={index} className="px-1 flex gap-4">
          <div className="w-8 h-8 flex justify-center items-center  bg-red-100 text-red-500 font-semibold rounded-full">
            {edu?.institution?.charAt(0)}
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              {edu?.degree}
            </h3>

            <h3 className="mt-2 text-sm text-red-500 font-semibold tracking-wide">
              {edu?.institution}
            </h3>
          </div>
          <div className="h-fit px-4 py-1 bg-red-100 text-sm text-red-500 font-semibold rounded-full">
            <span>{new Date(edu?.startDate).getFullYear()}</span>
            <span className="mx-1">-</span>
            <span>{new Date(edu?.endDate).getFullYear()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateEducation;
