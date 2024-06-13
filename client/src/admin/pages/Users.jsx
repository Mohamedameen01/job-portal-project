import React from "react";
import { useOutletContext } from "react-router-dom";
import { AdminPagesHeader, UserTable } from "../../components";

function Users() {
  const { showSideBar } = useOutletContext();
  return (
    <div className="mx-3">
      <AdminPagesHeader title={"all users"} />
      <UserTable />
    </div>
  );
}

export default Users;
