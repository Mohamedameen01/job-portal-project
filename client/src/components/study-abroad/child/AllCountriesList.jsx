import React from 'react'
import { countriesData } from '../../../utils/studyContriesData'

function AllCountriesList() {
  return (
    <div className="max-w-[1480px] mx-auto py-5 px-[10px] sm:px-[40px] md:px-[60px]">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
            {countriesData.map((item, ind) => (
                <div key={ind} className="p-3 grid sm:flex justify-center sm:justify-start  gap-3 items-center border rounded-lg hover:shadow-xl cursor-pointer">
                    <img src={item.flag} className='object-cover' />
                    <h4 className='text-sm sm:text-base font-bold capitalize'>{item.name}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllCountriesList