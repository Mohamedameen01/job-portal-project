import React from "react";
import { useOutletContext } from "react-router-dom";
import { AdminPagesHeader, CompanyTable } from "../../components";

function Companies() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3">
      <AdminPagesHeader title={"All Companies"} />
      <CompanyTable />
    </div>
  );
}

export default Companies;
