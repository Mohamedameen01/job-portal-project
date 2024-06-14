import React from "react";
import { SettingsOption } from "../../components";

function Settings() {
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
        <SettingsOption key={item} title={item} />
      ))}
    </div>
  );
}

export default Settings;
