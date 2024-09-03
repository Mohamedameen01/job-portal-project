import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import {
  setContactInformation,
  setProfileInfos,
  setSocialProfileInfos,
} from "../../../../../redux/employerSlice";
import TextArea from "../../../TextArea";
import ImgUploader from "../../../ImgUploader";
import ProfileForm from "./ProfileForm";
import SocialProfileForm from "./SocialProfileForm";
import ContactForm from "./ContactForm";

function CompanyProfileForm() {
  const { employerInfo } = useSelector((state) => state.employer);

  return (
    <div className="grid gap-5">
      <ProfileForm infos={employerInfo} />
      <SocialProfileForm infos={employerInfo} />
      <ContactForm infos={employerInfo} />
    </div>
  );
}

export default CompanyProfileForm;
