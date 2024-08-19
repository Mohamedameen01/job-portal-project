import React from 'react'
import { countriesData } from '../../../utils/studyContriesData'

function CountriesBox() {
  return (
    <div className='w-full bg-gray-200 p-5 grid gap-3 rounded-2xl'>
        {countriesData.map((country, index) => (
            <div key={index} className="w-full bg-[#fff] hover:bg-[#20c997] hover:text-white p-3 flex items-center justify-between rounded-xl cursor-pointer">
                <h2 className='font-semibold capitalize'>{country.name}</h2>
                <img src={country.flag} className='object-cover' />
            </div>
        ))}
    </div>
  )
}

export default CountriesBox