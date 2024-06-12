import React from "react";
import { Link } from "react-router-dom";

function SettingsOption({ title }) {
  return (
    <div className="bg-[#8B93FF] text-[#FFF7FC] flex justify-between items-center my-3 px-2 py-2 ">
      <h3 className="capitalize ms-4">{title}</h3>
      <Link className="w-fit text-center bg-violet-500 text-[#FFF7FC] px-3 py-1 rounded-md">
        Configure
      </Link>
    </div>
  );
}

export default SettingsOption;
