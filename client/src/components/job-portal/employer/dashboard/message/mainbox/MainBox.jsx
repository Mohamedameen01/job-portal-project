import React, { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";

import { getChats } from "../../../../../../redux/chatSlice";
import useListenMessage from "../../../../../../hooks/useListenMessage";

function MainBox() {
  const [userId, setUserId] = useState(null);
  const { loading, selectedUser, chats } = useSelector((state) => state.chat);
  const { image, token } = JSON.parse(localStorage.getItem("USER_LOCAL"));

  useListenMessage();

  const dispatch = useDispatch();
  const lastChat = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getChats(selectedUser?._id));
    }
  }, [selectedUser]);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      lastChat.current?.scrollIntoView({ behavior: "smooth" });
    }, [300]);
  }, [chats]);

  return (
    <div className="relative w-full bg-white px-4 grid gap-3 rounded-md shadow">
      <ChatHeader user={selectedUser} />
      <div className="w-full relative h-[394px] py-2 bg-customBgColor shadow-md shadow-gray-300 rounded-md overflow-hidden">
        <div className="w-full h-[310px] pt-3 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
          {chats?.map((chat, index) => (
            <div key={index} ref={lastChat}>
              <ChatBox
                chat={chat}
                receiver={selectedUser}
                userImg={image}
                userId={userId}
              />
            </div>
          ))}
          {!loading && chats?.length === 0 && (
            <p className="text-center  font-semibold text-customViolet">
              Send a message to start the chat
            </p>
          )}
        </div>

        <ChatInput receiverId={selectedUser._id} />
      </div>
    </div>
  );
}

export default MainBox;
