import React, { useState } from "react";

import { TiDeleteOutline } from "react-icons/ti";

function MultiLists({ title }) {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleAddBtn = () => {
    if (inputText.trim()) {
      setInputList([...inputList, inputText]);
      setInputText("");
    }
  };

  const handleEnterBtn = (e) => {
    if (e.key === "Enter") {
      console.log("Entereed");
      handleAddBtn();
    }
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder={title}
          className="outline outline-1 ps-2 p-1 rounded-lg"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleEnterBtn}
        />
        <button onClick={handleAddBtn} className="outline outline-1 p-1">
          Add
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 m-1">
        {inputList?.map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            <p>{text}</p>
            <span>{<TiDeleteOutline />}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiLists;
