import React, { useState } from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import { useDispatch } from "react-redux";

function SocialProfileForm({ infos }) {
  const [socialProfile, setSocialProfile] = useState({
    facebook: infos?.socialMedia?.facebook,
    twitter: infos?.socialMedia?.twitter,
    instagram: infos?.socialMedia?.instagram,
    linkedin: infos?.socialMedia?.linkedin,
  });
  const dispatch = useDispatch();

  const handleSocialProfileInfo = (name, value) => {
    setSocialProfile({ ...socialProfile, [name]: value });
  };

  const handleSocialProfileSave = (e) => {
    e.preventDefault();
    dispatch(setSocialProfileInfos(socialProfile));
  };

  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">
        Social Network
      </h2>
      <div className="mt-4 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Facebook"}
          type={"text"}
          placeText={"www.facebook.com/invision"}
          name={"facebook"}
          handleChildValue={handleSocialProfileInfo}
          value={infos?.socialMedia?.facebook}
        />
        <InputForms
          title={"Twitter"}
          type={"text"}
          name={"twitter"}
          handleChildValue={handleSocialProfileInfo}
          value={infos?.socialMedia?.twitter}
        />
        <InputForms
          title={"Linkedin"}
          type={"text"}
          name={"linkedin"}
          handleChildValue={handleSocialProfileInfo}
          value={infos?.socialMedia?.linkedin}
        />
        <InputForms
          title={"Instagram"}
          type={"text"}
          name={"instagram"}
          handleChildValue={handleSocialProfileInfo}
          value={infos?.socialMedia?.instagram}
        />
      </div>

      <FormButton text={"Save"} saveParentValue={handleSocialProfileSave} />
    </div>
  );
}

export default SocialProfileForm;
