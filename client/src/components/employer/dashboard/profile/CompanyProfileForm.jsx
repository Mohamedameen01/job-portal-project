import React from "react";
import ProfileForm from "./ProfileForm";
import InputForms from "../InputForms";
import FormButton from "../FormButton";

function CompanyProfileForm() {
  return (
    <div className="grid gap-5">
      <div className="grid bg-white mx-2 p-4 rounded-md shadow">
        <h2 className="py-2 text-lg tracking-wide font-semibold">Profile</h2>
        <ProfileForm boxText={"Browse Logo"} />
        <ProfileForm boxText={"Browse Cover"} />

        <div className="mt-5 grid lg:grid-cols-2 gap-3">
          <InputForms
            title={"Company name (optional)"}
            type={"text"}
            placeText={"Invision"}
          />
          <InputForms
            title={"Email address"}
            type={"email"}
            placeText={"company@gmail.com"}
          />
          <InputForms
            title={"Phone"}
            type={"number"}
            placeText={"1234567890"}
          />
          <InputForms
            title={"Website"}
            type={"text"}
            placeText={"www.company.com"}
          />
          <InputForms
            title={"Est.Since"}
            type={"text"}
            placeText={"06.04.2002"}
          />
          <InputForms title={"Team size"} type={"number"} placeText={"20-50"} />
          <div className="grid lg:col-span-2">
            <label className="text-sm font-semibold">About Comapny</label>
            <textarea
              className=" min-h-64  ms-1 my-2 p-[30px] bg-gray-200 placeholder:text-slate-500 text-sm leading-6 font-semibold tracking-wider rounded-md focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
            ></textarea>
          </div>
        </div>

        <FormButton text={"Save"} />
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
          />
          <InputForms title={"Twitter"} type={"text"} />
          <InputForms title={"Linkedin"} type={"text"} />
          <InputForms title={"Instagram"} type={"text"} />
        </div>

        <FormButton text={"Save"} />
      </div>

      <div className="grid bg-white mx-2 p-4 rounded-md shadow">
        <h2 className="py-2 text-lg tracking-wide font-semibold">
          Contact Information
        </h2>

        <div className="mt-4 grid lg:grid-cols-2 gap-3">
          <InputForms title={"Country"} type={"text"} placeText={"India"} />
          <InputForms title={"City"} type={"text"} placeText={"Kochi"} />
          <div className="lg:col-span-2">
            <InputForms
              title={"Complete Address"}
              type={"text"}
              placeText={
                "S 107, 4th Floor Monlash Business Centre Crescens Tower, South Kalamassery, Kochi, Kerala 682033, India"
              }
            />
          </div>
        </div>

        <FormButton text={"Save"} />
      </div>
    </div>
  );
}

export default CompanyProfileForm;
