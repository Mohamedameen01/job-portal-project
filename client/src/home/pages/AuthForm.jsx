import React from "react";
import { Outlet } from "react-router-dom";

function AuthForm() {
  return (
    <div className="absolute left-0 right-0 bg-[#eef2f6] h-screen">
      <Outlet />
    </div>
  );
}

export default AuthForm;
