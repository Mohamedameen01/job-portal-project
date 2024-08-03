import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiBuildingOffice } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setUserRole, setUserRoleLocal } from "../../redux/userSlice";

function RoleSelection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, role } = useSelector((state) => state.user);

  const handleUserRole = (role) => {
    dispatch(setUserRole(role));
  };

  useEffect(() => {
    if (success) {
      dispatch(setUserRoleLocal());
      if (role === "Employer") {
        navigate("/employer/information-form");
      } else if (role === "Employee") {
        navigate("/employee/information-form");
      }
    }
  }, [success, role, dispatch]);

  return (
    <div className="w-full h-full grid md:grid-cols-2 gap-3">
      <div className="flex justify-center md:justify-end items-end md:items-center ">
        <div
          onClick={() => handleUserRole({ role: "Employee" })}
          className="grid gap-1 md:gap-3 p-5  rounded-lg shadow-lg transition-all ease-in-out duration-700  bg-[#ffffff] text-[#673ab7]  hover:bg-[#673ab7] hover:text-white hover:scale-105  cursor-pointer"
        >
          <div className="mx-auto text-6xl md:text-9xl">
            <BsPersonWorkspace />
          </div>
          <p className="antialiased text-center text-md md:text-lg font-medium ">
            Employee
          </p>
        </div>
      </div>
      <div
        onClick={() => handleUserRole({ role: "Employer" })}
        className="flex justify-center md:justify-start items-start md:items-center"
      >
        <div className="grid gap-1 md:gap-3 p-5  rounded-lg shadow-lg transition-all ease-in-out duration-700  bg-[#ffffff] text-[#673ab7]  hover:bg-[#673ab7] hover:text-white hover:scale-105  cursor-pointer">
          <div className="mx-auto text-6xl md:text-9xl">
            <PiBuildingOffice />
          </div>
          <p className="antialiased text-center text-md md:text-lg font-medium ">
            Employer
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
