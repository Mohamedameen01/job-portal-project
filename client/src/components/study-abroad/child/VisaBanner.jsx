import React from "react";

import visaBanner from "/assets/images/study-abroad/study-visa.jpg";

function VisaBanner() {
  return (
    <div className="py-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[60px] pt-3">
        <div className="w-full grid gap-3 lg:flex justify-between items-center  tracking-wide">
          <div className="grid gap-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-black">
              Committed to Your Visa
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-500">
              Success - About us
            </h2>
          </div>
          <div className="w-full lg:w-2/5 xl:w-4/12 mr-3">
            <p className="text-slate-500 text-lg font-semibold">
              We deliver budget-friendly visa solutions, removing financial
              barriers from your journey. Our goal is to provide quality
              services at reasonable rates
            </p>
          </div>
        </div>
        <div className="w-full mt-5">
          <img src={visaBanner} className="w-full object-cover " />
        </div>
      </div>
    </div>
  );
}

export default VisaBanner;
