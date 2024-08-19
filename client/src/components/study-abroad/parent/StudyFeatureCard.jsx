import React from "react";

import { studyFeaturesCard } from "../../../utils/StudyFeatursData";
import StudyHead from "../child/StudyHead";

function StudyFeatureCard() {
  return (
    <div className="bg-customBgColor py-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[50px] grid justify-center gap-4">
        <StudyHead text={"How we help client"} position={"center"} />

        <h1 className="max-w-4xl mx-auto text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
          Expertise from Seasoned Professionals
        </h1>

        <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 ">
          {studyFeaturesCard.map((item, ind) => (
            <div
              key={ind}
              className={`group bg-white p-5 flex flex-col ${
                ind === studyFeaturesCard.length - 1 &&
                studyFeaturesCard.length % 2 !== 0
                  ? "md:w-1/2 md:col-span-2 md:mx-auto lg:w-full  lg:col-span-1"
                  : ""
              }  items-center gap-4 ${
                ind === 2
                  ? "lg:border-r-0"
                  : "border-b-2 md:border-b-0 lg:border-r-2"
              } lg:shadow-md`}
            >
              <div className="w-28 h-28 flex items-center justify-center text-6xl  text-[#fb4927] group-hover:bg-[#fb4927] group-hover:text-white rounded-full">
                {item.icon}
              </div>
              <h1 className="mt-3 text-center text-2xl text-black font-black">
                {item.title}
              </h1>
              <p className="text-center">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyFeatureCard;
