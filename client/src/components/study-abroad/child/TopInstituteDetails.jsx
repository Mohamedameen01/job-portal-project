import React from "react";
import { IoIosStar } from "react-icons/io";
import girlImg from "/assets/images/study-abroad/selected-page-girl.jpg";

function TopInstituteDetails() {
  const topInstitutes = [
    "University of Toronto",
    "University of British Columbia",
    "University of Montreal",
    "University of Waterloo",
    "Queen's University",
  ];
  return (
    <div className="grid gap-4">
      <h2 className="text-3xl font-black tracking-wider">Top Institutes</h2>
      <p className="text-lg text-slate-600 tracking-wider">
        Canada's educational landscape shines with a constellation of top-tier
        universities that have garnered global recognition for their academic
        prowess, research contributions, and commitment to innovation.
      </p>
      <div className="mt-3 grid lg:grid-cols-2 gap-4">
        <img src={girlImg} className="object-cover" />
        <ul className="mt-[20px] lg:mt-0 flex flex-col justify-center gap-3">
          {topInstitutes.map((item, index) => (
            <li className="flex gap-2 items-center">
              <span className="text-[#20c997]">
                <IoIosStar />
              </span>
              <h6 className="text-slate-600 text-lg tracking-wider">{item}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopInstituteDetails;
