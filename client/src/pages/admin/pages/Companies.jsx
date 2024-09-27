import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../../components";
import { AdminPagesHeader } from "../../../components/admin";
import { CompanyTable } from "../../../components/admin/companies";

function Companies() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3 p-4 bg-customBgColor">
      <AdminPagesHeader title={"All Companies"} />
      <CompanyTable />
      <Pagination />
    </div>
  );
}

export default Companies;
