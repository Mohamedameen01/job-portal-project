import React from "react";
import { apps } from "../utils/Links.jsx";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.link === "/signin") {
      navigate(item.link, { state: { landValue: true } });
    }
  };
  return (
    <div className="mt-5 my-3 mx-2 flex flex-col justify-center items-center gap-5 bg-[#f7f7f8]">
      <h1 className="antialiased text-3xl text-center font-bold">
        Welcome to Our Multi-Service Platform
      </h1>
      <div className="grid lg:grid-cols-2 gap-3 md:w-3/4">
        {apps.map((item, index) => (
          <div
            onClick={() => handleNavigation(item)}
            key={index}
            className={`flex items-center gap-3 border-2 bg-[#673ab7] px-4 py-4 rounded-lg transition-all ease-in-out duration-700 hover:scale-105 cursor-pointer ${
              index === apps.length - 1 && apps.length % 2 !== 0
                ? "lg:mx-auto lg:col-span-2 "
                : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center gap-2 text-white antialiased">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="text-sm md:text-md font-medium">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
