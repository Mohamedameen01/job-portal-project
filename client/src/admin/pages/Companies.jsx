import React from "react";
import { useOutletContext } from "react-router-dom";
import { AdminPagesHeader, CompanyTable, Pagination } from "../../components";

function Companies() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mr-2 px-5 py-3 bg-[#eef2f6]">
      <AdminPagesHeader title={"All Companies"} />
      <CompanyTable />
      <Pagination />
    </div>
  );
}

export default Companies;
