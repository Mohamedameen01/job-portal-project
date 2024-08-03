import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileForm from "./ProfileForm";
import InputForms from "../InputForms";
import FormButton from "../FormButton";
import {
  setContactInformation,
  setProfileInfos,
  setSocialProfileInfos,
} from "../../../../../redux/employerSlice";

function CompanyProfileForm() {
  const { employerInfo } = useSelector((state) => state.employer);

  const [profileInfo, setProfileInfo] = useState({
    companyLogo: employerInfo?.companyLogo,
    companyCoverImg: employerInfo?.companyCoverImg,
    companyName: employerInfo?.companyName,
    companyMail: employerInfo?.companyMail,
    companyContact: employerInfo?.companyContact,
    companyWebSite: employerInfo?.companyWebSite,
    companyEst: employerInfo?.founded,
    companyTeamSize: employerInfo?.companyTeamSize,
    aboutCompany: employerInfo?.aboutCompany,
  });

  const [socialProfile, setSocialProfile] = useState({
    facebook: employerInfo?.socialMedia?.facebook,
    twitter: employerInfo?.socialMedia?.twitter,
    instagram: employerInfo?.socialMedia?.instagram,
    linkedin: employerInfo?.socialMedia?.linkedin,
  });

  const [contactInfo, setContactInfo] = useState({
    street: employerInfo?.companyAddress?.street,
    city: employerInfo?.companyAddress?.city,
    state: employerInfo?.companyAddress?.state,
    zip: employerInfo?.companyAddress?.zip,
    country: employerInfo?.companyAddress?.country,
    fullAddress: employerInfo?.completeAddress,
  });

  // console.log("Employer Info", employerInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setProfileInfo({
      ...profileInfo,
      aboutCompany: employerInfo?.aboutCompany,
    });
  }, [employerInfo]);

  // Functions for Child Input Value:
  const handleProfileInfo = (name, value) => {
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSocialProfileInfo = (name, value) => {
    setSocialProfile({ ...socialProfile, [name]: value });
  };

  const handleContactInfo = (name, value) => {
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // Save Button Functions:
  const handleProfileSave = (e) => {
    e.preventDefault();
    dispatch(setProfileInfos(profileInfo));
  };

  const handleSocialProfileSave = (e) => {
    e.preventDefault();
    dispatch(setSocialProfileInfos(socialProfile));
  };

  const handleContactsSave = (e) => {
    e.preventDefault();
    dispatch(setContactInformation(contactInfo));
  };

  return (
    <div className="grid gap-5">
      <div className="grid bg-white mx-2 p-4 rounded-md shadow">
        <h2 className="py-2 text-lg tracking-wide font-semibold">Profile</h2>
        <ProfileForm
          boxText={"Browse Logo"}
          name={"companyLogo"}
          handleChildValue={handleProfileInfo}
          value={employerInfo?.companyLogo}
        />
        <ProfileForm
          boxText={"Browse Cover"}
          name={"companyCoverImg"}
          handleChildValue={handleProfileInfo}
          value={employerInfo?.companyCoverImg}
        />

        <div className="mt-5 grid lg:grid-cols-2 gap-3">
          <InputForms
            title={"Company name (optional)"}
            type={"text"}
            placeText={"Invision"}
            name={"companyName"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.companyName}
          />
          <InputForms
            title={"Email address"}
            type={"email"}
            placeText={"company@gmail.com"}
            name={"companyMail"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.companyMail}
          />
          <InputForms
            title={"Phone"}
            type={"number"}
            placeText={"1234567890"}
            name={"companyContact"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.companyContact}
          />
          <InputForms
            title={"Website"}
            type={"text"}
            placeText={"www.company.com"}
            name={"companyWebSite"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.companyWebSite}
          />
          <InputForms
            title={"Est.Since"}
            type={"date"}
            placeText={"06.04.2002"}
            name={"companyEst"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.founded}
          />
          <InputForms
            title={"Team size"}
            type={"number"}
            placeText={"20-50"}
            name={"companyTeamSize"}
            handleChildValue={handleProfileInfo}
            value={employerInfo?.companyTeamSize}
          />
          <div className="grid lg:col-span-2">
            <label className="text-sm font-semibold">About Comapny</label>
            <textarea
              className=" min-h-64  ms-1 my-2 p-[30px] bg-gray-200 placeholder:text-slate-500 text-sm leading-6 font-semibold tracking-wider rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
              onChange={(e) =>
                setProfileInfo({
                  ...profileInfo,
                  aboutCompany: e.target.value,
                })
              }
              value={profileInfo.aboutCompany}
            ></textarea>
          </div>
        </div>

        <FormButton text={"Save"} saveParentValue={handleProfileSave} />
      </div>

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
            value={employerInfo?.socialMedia?.facebook}
          />
          <InputForms
            title={"Twitter"}
            type={"text"}
            name={"twitter"}
            handleChildValue={handleSocialProfileInfo}
            value={employerInfo?.socialMedia?.twitter}
          />
          <InputForms
            title={"Linkedin"}
            type={"text"}
            name={"linkedin"}
            handleChildValue={handleSocialProfileInfo}
            value={employerInfo?.socialMedia?.linkedin}
          />
          <InputForms
            title={"Instagram"}
            type={"text"}
            name={"instagram"}
            handleChildValue={handleSocialProfileInfo}
            value={employerInfo?.socialMedia?.instagram}
          />
        </div>

        <FormButton text={"Save"} saveParentValue={handleSocialProfileSave} />
      </div>

      <div className="grid bg-white mx-2 p-4 rounded-md shadow">
        <h2 className="py-2 text-lg tracking-wide font-semibold">
          Contact Information
        </h2>

        <div className="mt-4 grid lg:grid-cols-2 gap-3">
          <InputForms
            title={"Street"}
            type={"text"}
            placeText={"South Kalamassery"}
            name={"street"}
            handleChildValue={handleContactInfo}
            value={employerInfo?.companyAddress?.street}
          />
          <InputForms
            title={"City"}
            type={"text"}
            placeText={"Kochi"}
            name={"city"}
            handleChildValue={handleContactInfo}
            value={employerInfo?.companyAddress?.city}
          />
          <InputForms
            title={"State"}
            type={"text"}
            placeText={"Kerala"}
            name={"state"}
            handleChildValue={handleContactInfo}
            value={employerInfo?.companyAddress?.state}
          />
          <InputForms
            title={"Zip"}
            type={"text"}
            placeText={"682033"}
            name={"zip"}
            handleChildValue={handleContactInfo}
            value={employerInfo?.companyAddress?.zip}
          />
          <InputForms
            title={"Country"}
            type={"text"}
            placeText={"India"}
            name={"country"}
            handleChildValue={handleContactInfo}
            value={employerInfo?.companyAddress?.country}
          />
          <div className="lg:col-span-2">
            <InputForms
              title={"Complete Address"}
              type={"text"}
              placeText={
                "S 107, 4th Floor Monlash Business Centre Crescens Tower, South Kalamassery, Kochi, Kerala 682033, India"
              }
              name={"fullAddress"}
              handleChildValue={handleContactInfo}
              value={employerInfo?.completeAddress}
            />
          </div>
        </div>

        <FormButton text={"Save"} saveParentValue={handleContactsSave} />
      </div>
    </div>
  );
}

export default CompanyProfileForm;
