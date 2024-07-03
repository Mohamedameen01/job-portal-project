import React from "react";
import { Outlet } from "react-router-dom";

function AuthForm() {
  return (
    <div className="bg-[#eef2f6] h-screen">
      <Outlet />
    </div>
  );
}

export default AuthForm;
