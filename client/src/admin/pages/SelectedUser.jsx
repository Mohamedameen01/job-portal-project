import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userData } from "../../utils/table-datas";

import { UserDetailsHeader, UserDetailsBody } from "../../components";

function SelectedUser() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const fethData = async () => {
      const objId = parseInt(id, 10);

      if (!isNaN(objId)) {
        const data = userData.find((item) => item.id === objId);
        setUserDetails(data || null);
      } else {
        console.log("Invalid Params Id");
      }
    };
    fethData();
  }, [id]);
  return (
    <div className="mx-5">
      <UserDetailsHeader userInfo={userDetails} />
      <UserDetailsBody userInfo={userDetails} />
    </div>
  );
}

export default SelectedUser;
