import React from "react";
import { useOutletContext } from "react-router-dom";
import { UserTable } from "../../components";

function Users() {
  const { showSideBar } = useOutletContext();
  return (
    <div className={`mx-3 ${showSideBar ? "col-span-5" : "col-span-11"}`}>
      <UserTable />
    </div>
  );
}

export default Users;
