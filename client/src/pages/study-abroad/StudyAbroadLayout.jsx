import React from "react";
import { Outlet } from "react-router-dom";
import { StudyNavbar } from "../../components/study-abroad";

function StudyAbroadLayout() {
  return (
    <>
      <StudyNavbar />
      
      <Outlet />
      
    </>
  );
}

export default StudyAbroadLayout;
