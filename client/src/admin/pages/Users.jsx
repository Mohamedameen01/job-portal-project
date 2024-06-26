import React from "react";
import { useOutletContext } from "react-router-dom";
import { Pagination } from "../../components";
import { AdminPagesHeader } from "../../components/admin";
import { UserTable } from "../../components/admin/users";

function Users() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mr-2 px-5 py-3 bg-[#eef2f6]">
      <AdminPagesHeader title={"all users"} />
      <UserTable />
      <Pagination />
    </div>
  );
}

export default Users;
