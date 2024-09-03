import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainBox from "./mainbox/MainBox";
import SearchBar from "./sidebar/SearchBar";
import UsersList from "./sidebar/UsersList";
import DefaultChatBox from "./DefaultChatBox";
import SkeltonList from "./sidebar/SkeltonList";
import { useSocketContext } from "../../../context/SocketContext";
import { getOtherUsers } from "../../../redux/chatSlice";



function MessageBox() {
  const dispatch = useDispatch();
  const { userLists } = useSelector((state) => state.chat);
  const { selected } = useSocketContext();

  useEffect(() => {
    dispatch(getOtherUsers());
  }, [dispatch]);

  return (
    <div className="w-full md:flex gap-2">
      <div className="w-full lg:w-[35%] h-[508px] bg-white px-3 lg:px-5 py-3 grid gap-4 rounded-md shadow">
        <SearchBar />
        <div className=" grid gap-4 overflow-y-auto custom-scrollbar">
          {!userLists ? (
            <SkeltonList />
          ) : (
            userLists?.map((item) => <UsersList key={item._id} user={item} />)
          )}
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        {selected ? <MainBox /> : <DefaultChatBox />}
      </div>
    </div>
  );
}

export default MessageBox;
