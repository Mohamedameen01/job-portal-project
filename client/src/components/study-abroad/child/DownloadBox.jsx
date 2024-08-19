import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
function DownloadBox() {
  return (
    <div className="bg-gray-200 p-5 grid gap-4 rounded-2xl">
      <h2 className="text-2xl font-bold tracking-wide">Downloads</h2>
      <div className="flex justify-center gap-4">
        <div className="w-full bg-white p-3 grid gap-4 rounded-lg cursor-pointer">
          <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#20c997] hover:bg-[#fff] text-[#fff] hover:text-[#20c997] text-2xl hover:border hover:border-[#20c997] rounded-full">
            <BsFiletypePdf />
          </div>
          <h6 className="text-center font-semibold">
            <span className="uppercase">toefl</span>
            <br />
            Application Form
          </h6>

          <h6 className="text-slate-600 text-center">4.5KB</h6>
        </div>
        <div className="w-full bg-white p-3 grid gap-4 rounded-lg cursor-pointer">
          <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#20c997] hover:bg-[#fff] text-[#fff] hover:text-[#20c997] text-2xl hover:border hover:border-[#20c997] rounded-full">
            <BsFiletypePdf />
          </div>
          <h6 className="text-center font-semibold capitalize">
            terms & conditions
          </h6>
          <h6 className="text-slate-600 text-center">3.5KB</h6>
        </div>
      </div>
    </div>
  );
}

export default DownloadBox;
