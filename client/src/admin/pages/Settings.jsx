import React from "react";
import { useOutletContext } from "react-router-dom";
import { SettingsOption } from "../../components";

function Settings() {
  const { showSideBar } = useOutletContext();
  const options = [
    "payment settings",
    "announcment settings",
    "advertisemen settings",
    "plan settings",
  ];
  return (
    <div className="mx-3">
      <h1 className="text-xl">Settings</h1>
      {options.map((item) => (
        <SettingsOption title={item} />
      ))}
    </div>
  );
}

export default Settings;
