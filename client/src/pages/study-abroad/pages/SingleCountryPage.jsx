import React from 'react'
import { CountriesBox, CountryDetailsSection, DownloadBox, FeatureSection, IconBox, InnerContactForm, InnerFooter, InnerHeader, TopInstituteDetails } from '../../../components/study-abroad'

function SingleCountryPage() {
  return (
    <>
        <InnerHeader />
        <div className="max-w-[1480px] mx-auto py-5 px-[10px] sm:px-[40px] md:px-[60px] grid gap-4 grid-cols-1 lg:grid-cols-3 bg-white">
          <div className="w-full grid gap-5">
            <CountriesBox />
            <IconBox />
          </div>
          <div className="col-span-2 mt-[30px] lg:mt-0">
            <CountryDetailsSection />
            <FeatureSection />
            <TopInstituteDetails />
          </div>
        </div>
        <InnerContactForm />
        <InnerFooter /> 
    </>
  )
}

export default SingleCountryPage