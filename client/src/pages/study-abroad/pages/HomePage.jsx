import React from "react";
import {
  StudyAboutUs,
  StudyAppRates,
  StudyCountries,
  StudyFeatureCard,
  StudyFeatures,
  StudyFeedback,
  StudyHomeBanner,
  StudyQuestions,
  StudyServices,
  StudyVisa,
} from "../../../components/study-abroad";

function HomePage() {
  return (
    <>
      <StudyHomeBanner />
      <StudyFeatures />
      <StudyAboutUs />
      <StudyFeatureCard />
      <StudyServices />
      <StudyVisa />
      <StudyAppRates />
      <StudyCountries />
      <StudyQuestions />
      <StudyFeedback />
    </>
  );
}

export default HomePage;
