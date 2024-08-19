import React from "react";

import StudyHead from "../child/StudyHead";
import { institutionImgs } from "../../../utils/StudyInstitutionsImgs";

function StudyInstitutions() {
  return (
    <div className="bg-customBgColor py-5">
      <div className="max-w-[1480px] mx-auto mt-5 px-[10px] sm:px-[40px] md:px-[50px] grid gap-5">
        <StudyHead text={"Top Institutions"} position={"center"} />
        <div className="p-5 bg-white grid  md:grid-cols-4 gap-5 rounded-md shadow">
          {institutionImgs.map((img, ind) => (
            <div
              key={ind}
              className={`group flex justify-center items-center p-3 cursor-pointer`}
            >
              <img
                src={img}
                alt="institutions-image"
                className="object-cover  transition-transform duration-300 ease-in-out transform  group-hover:drop-shadow-2xl group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyInstitutions;
