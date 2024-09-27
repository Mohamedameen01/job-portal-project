import React, { useEffect, useState } from "react";
import TextArea from "../../../TextArea";
import InputForms from "../../../InputForms";
import ImgUploader from "../../../ImgUploader";
import FormButton from "../../../FormButton";
import { useDispatch } from "react-redux";

function ProfileForm({infos}) {
  const [profileInfo, setProfileInfo] = useState({
    companyLogo: infos?.companyLogo,
    companyCoverImg: infos?.companyCoverImg,
    companyName: infos?.companyName,
    companyMail: infos?.companyMail,
    companyContact: infos?.companyContact,
    companyWebSite: infos?.companyWebSite,
    companyEst: infos?.founded,
    companyTeamSize: infos?.companyTeamSize,
    aboutCompany: infos?.aboutCompany,
  });
  const dispatch = useDispatch()

  useEffect(() => {
    setProfileInfo({
      ...profileInfo,
      aboutCompany: infos?.aboutCompany,
    });
  }, [infos]);

  const handleProfileInfo = (name, value) => {
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    
    dispatch(setProfileInfos(profileInfo));
  };

  return (
    <div className="grid bg-white mx-2 p-4 rounded-md shadow">
      <h2 className="py-2 text-lg tracking-wide font-semibold">Profile</h2>
      <ImgUploader
        boxText={"Browse Logo"}
        name={"companyLogo"}
        handleChildValue={handleProfileInfo}
        value={infos?.companyLogo}
      />
      <ImgUploader
        boxText={"Browse Cover"}
        name={"companyCoverImg"}
        handleChildValue={handleProfileInfo}
        value={infos?.companyCoverImg}
      />

      <div className="mt-5 grid lg:grid-cols-2 gap-3">
        <InputForms
          title={"Company name (optional)"}
          type={"text"}
          placeText={"Invision"}
          name={"companyName"}
          handleChildValue={handleProfileInfo}
          value={infos?.companyName}
        />
        <InputForms
          title={"Email address"}
          type={"email"}
          placeText={"company@gmail.com"}
          name={"companyMail"}
          handleChildValue={handleProfileInfo}
          value={infos?.companyMail}
        />
        <InputForms
          title={"Phone"}
          type={"number"}
          placeText={"1234567890"}
          name={"companyContact"}
          handleChildValue={handleProfileInfo}
          value={infos?.companyContact}
        />
        <InputForms
          title={"Website"}
          type={"text"}
          placeText={"www.company.com"}
          name={"companyWebSite"}
          handleChildValue={handleProfileInfo}
          value={infos?.companyWebSite}
        />
        <InputForms
          title={"Est.Since"}
          type={"date"}
          placeText={"06.04.2002"}
          name={"companyEst"}
          handleChildValue={handleProfileInfo}
          value={infos?.founded}
        />
        <InputForms
          title={"Team size"}
          type={"number"}
          placeText={"20-50"}
          name={"companyTeamSize"}
          handleChildValue={handleProfileInfo}
          value={infos?.companyTeamSize}
        />
        <TextArea
          label={"About Company"}
          name={"aboutCompany"}
          handleChildValue={handleProfileInfo}
          value={profileInfo?.aboutCompany}
          placeText={
            "Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers."
          }
        />
      </div>

      <FormButton text={"Save"} saveParentValue={handleProfileSave} />
    </div>
  );
}

export default ProfileForm;
