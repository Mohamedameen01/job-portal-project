import React from "react";
import { TiMessages } from "react-icons/ti";

function DefaultChatBox() {
  return (
    <div className=" h-[508px] pt-5 flex flex-col justify-start items-center gap-3 rounded-md message-box">
      <h1 className="text-center text-xl font-semibold text-white">
        Select a chat to start messaging
      </h1>
      <div className="mx-auto text-5xl text-white">
        <TiMessages />
      </div>
    </div>
  );
}

export default DefaultChatBox;
