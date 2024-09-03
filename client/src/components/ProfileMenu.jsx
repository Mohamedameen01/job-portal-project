import React from "react";
import { Link, useNavigate } from "react-router-dom";

function  ProfileMenu({ drop, setDrop, from }) {
  const navigate = useNavigate();
  
  const handleDashboardBtn = () => {  
    if (from === "employer") {
      navigate("/job-portal/employer/dashboard");
    } else if (from === "employee") {
      navigate("/job-portal/employee/dashboard");
    }
    setDrop(!drop);
  };
  
  return (
    <div className="grid gap-2 absolute top-16 right-10 bg-white px-3 py-3 border-1 shadow-md rounded-lg ">
      <button
        onClick={handleDashboardBtn}
        className="w-full tracking-wide text-[#673ab7] font-semibold border-1 p-2 rounded-lg hover:bg-[#ede7f6]"
      >
        Dashboard
      </button>
      <Link
        onClick={() => setDrop(!drop)}
        className="w-full tracking-wide text-[#673ab7] font-semibold border-1 p-2 rounded-lg hover:bg-[#ede7f6]"
      >
        Logout
      </Link>
    </div>
  );
}

export default ProfileMenu;
