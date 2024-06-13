import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

function AuthForm() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthForm;
