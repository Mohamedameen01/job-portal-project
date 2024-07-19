import React from "react";
import SideListBox from "./SideListBox";
import MainBox from "./MainBox";

function MessageBox() {
  return (
    <div className="w-full flex gap-2">
      <div className="w-[35%]">
        <SideListBox />
      </div>
      <div className="w-[70%]">
        <MainBox />
      </div>
    </div>
  );
}

export default MessageBox;
