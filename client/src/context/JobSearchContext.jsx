import { createContext, useContext, useState } from 'react'

const JobSearchContext = createContext();

export const useJobSearchContext = () => {
    return useContext(JobSearchContext)
}

export const JobSearchContextProvider = ({children}) => {
    const [searchTexts, setSearchTexts] = useState(null);
    const [searchOptions, setSearchOptions] = useState(null);
    const [searchRadio, setSearchRadio] = useState(null);
    const [searchJobType, setSearchJobType] = useState(null);
    const [searchExperience, setSearchExperience] = useState(null);
    const [clearSearch, setClearSearch] = useState(false);
  return (
    <JobSearchContext.Provider value={{searchTexts, searchOptions, searchRadio, searchJobType, searchExperience, clearSearch, setSearchExperience ,setSearchTexts, setSearchOptions, setSearchRadio, setSearchJobType, setClearSearch}}>
        {children}
    </JobSearchContext.Provider>
  )
}

