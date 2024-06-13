import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default UserLayout;
