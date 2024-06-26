import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../components";
import { AdminPagesHeader } from "../../components/admin";
import { CompanyTable } from "../../components/admin/companies";

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
