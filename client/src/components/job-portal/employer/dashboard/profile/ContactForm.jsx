import React, { useState } from "react";
import InputForms from "../../../InputForms";
import FormButton from "../../../FormButton";
import { useDispatch } from "react-redux";

function ContactForm({ infos }) {
  const [contactInfo, setContactInfo] = useState({
    street: infos?.companyAddress?.street,
    city: infos?.companyAddress?.city,
    state: infos?.companyAddress?.state,
    zip: infos?.companyAddress?.zip,
    country: infos?.companyAddress?.country,
    fullAddress: infos?.completeAddress,
  });
  const dispatch = useDispatch();

  const handleContactInfo = (name, value) => {
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleContactsSave = (e) => {
    e.preventDefault();
    dispatch(setContactInformation(contactInfo));
  };
  
  return (
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
          value={infos?.companyAddress?.street}
        />
        <InputForms
          title={"City"}
          type={"text"}
          placeText={"Kochi"}
          name={"city"}
          handleChildValue={handleContactInfo}
          value={infos?.companyAddress?.city}
        />
        <InputForms
          title={"State"}
          type={"text"}
          placeText={"Kerala"}
          name={"state"}
          handleChildValue={handleContactInfo}
          value={infos?.companyAddress?.state}
        />
        <InputForms
          title={"Zip"}
          type={"text"}
          placeText={"682033"}
          name={"zip"}
          handleChildValue={handleContactInfo}
          value={infos?.companyAddress?.zip}
        />
        <InputForms
          title={"Country"}
          type={"text"}
          placeText={"India"}
          name={"country"}
          handleChildValue={handleContactInfo}
          value={infos?.companyAddress?.country}
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
            value={infos?.completeAddress}
          />
        </div>
      </div>

      <FormButton text={"Save"} saveParentValue={handleContactsSave} />
    </div>
  );
}

export default ContactForm;
