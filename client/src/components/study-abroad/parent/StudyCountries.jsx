import React from "react";

import StudyHead from "../child/StudyHead";
import { countriesList } from "../../../utils/studyContriesData.jsx";
import { useNavigate } from "react-router-dom";

function StudyCountries() {
  const navigate = useNavigate();

  const isBelowXl = window.innerWidth < 1280;
  const list = isBelowXl ? [...countriesList, ...countriesList] : countriesList;

  return (
    <div className="bg-white py-5">
      <div className="max-w-[1480px] mx-auto  px-[10px] sm:px-[40px] md:px-[50px]">
        <StudyHead text={"countries"} position={"center"} />
        <h1 className="md:w-2/3 lg:w-1/3 mx-auto my-3 text-2xl md:text-4xl  text-black text-center font-black">
          Best Countries to Study Abroad
        </h1>

        <div className="w-full overflow-hidden">
          <div className="flex  gap-4 animate-loop-scroll xl:animate-none">
            {list.map((item, ind) => (
              <div
                key={ind}
                className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-[15%] group my-4 relative  p-3 cursor-pointer"
                onClick={() => navigate("single-country", {state: {title:item.name, currentPage: "Country"}})}
              >
                <div className="relative">
                  <div className="absolute top-[20%] -left-8 border-2 border-white h-1/3">
                    <div className="h-1/2 bg-[#fb4927] border-2 border-dashed"></div>
                    <div className="h-1/2 bg-gradient-to-b from-orange-500 to-red-600"></div>
                  </div>

                  <img
                    src={item.flagImg}
                    alt={item.name}
                    className="w-24 h-28  mx-auto transition-all ease-in-out duration-500 group-hover:-translate-y-3 "
                  />

                  <h4 className=" text-center font-black uppercase">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyCountries;
