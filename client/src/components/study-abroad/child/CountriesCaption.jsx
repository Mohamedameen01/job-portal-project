import React from "react";

function CountriesCaption() {
  return (
    <div className="max-w-[1480px] mx-auto py-5 px-[10px] sm:px-[40px] md:px-[60px] grid lg:grid-cols-2 gap-3">
      <div className="">
        <h1 className="text-3xl xl:text-5xl font-black ">
          Make Your Choice for the
        </h1>
        <h1 className="xl:mt-3 text-3xl xl:text-5xl text-slate-600 font-black tracking-wider">
          Preferred Nation
        </h1>
      </div>
      <div className="lg:w-5/6 mx-auto flex items-center">
      <p className="text-lg xl:text-xl text-slate-600 font-semibold ">
        Choosing the ideal destination for immigration is a pivotal decision
        that can shape the trajectory of your
      </p>
      </div>
    </div>
  );
}

export default CountriesCaption;
