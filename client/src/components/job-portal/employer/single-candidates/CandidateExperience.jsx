import React from "react";
import { useSelector } from "react-redux";

function CandidateExperience() {
  const { candidate } = useSelector((state) => state.employer);
  return (
    <div className="mt-5 grid gap-3">
      <h1 className="text-lg font-semibold tracking-wide">Work & Experience</h1>
      {candidate?.workExperience?.map((work, index) => (
        <div key={work._id || index} className="px-1 flex gap-4">
          <div className="w-8 h-8 flex justify-center items-center  bg-blue-100 text-blue-500 font-semibold rounded-full">
            {work?.company?.charAt(0)}
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
             {work?.jobTitle}
            </h3>

            <h3 className="mt-2 text-sm text-blue-500 font-semibold tracking-wide">
              {work?.company}
            </h3>
          </div>
          <div className="h-fit px-4 py-1 bg-blue-100 text-sm text-blue-500 font-semibold rounded-full">
            <span>{new Date(work?.startDate).getFullYear()} </span>
            <span className="mx-1">-</span>
            <span>{new Date(work?.endDate).getFullYear()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateExperience;
