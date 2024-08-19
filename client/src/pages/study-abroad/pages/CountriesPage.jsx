import React from "react";
import {
  AllCountriesList,
  CountriesCaption,
  InnerContactForm,
  InnerFooter,
  InnerHeader,
} from "../../../components/study-abroad";

function CountriesPage() {
  return (
    <>
      <InnerHeader />
      <CountriesCaption />
      <AllCountriesList />
      <InnerContactForm />
      <InnerFooter />
    </>
  );
}

export default CountriesPage;
