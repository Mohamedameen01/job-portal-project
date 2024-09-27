import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../../components";
import { AdminPagesHeader } from "../../../components/admin";
import { UserTable } from "../../../components/admin/users";

function Users() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3 p-4 bg-customBgColor">
      <AdminPagesHeader title={"all users"} />
      <UserTable />
      <Pagination />
    </div>
  );
}

export default Users;
