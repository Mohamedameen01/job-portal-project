import React from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyTable } from "../../components";

function Companies() {
  const { showSideBar } = useOutletContext();
  return (
    <div className={`mx-3 ${showSideBar ? "col-span-5" : "col-span-11"}`}>
      <CompanyTable />
    </div>
  );
}

export default Companies;
