import React, { useEffect } from 'react'
import CompanyHead from './CompanyHead'
import CompanyBody from './CompanyBody'
import { useDispatch, useSelector } from 'react-redux';

function CompanySection({ toggleValue, setToggleValue }) {
  const { success } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(resetEmployeeSuccess()) 
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div
      className={`h-screen col-span-3 py-5 ms-8 mr-2 ${
        toggleValue && "blur-md overflow-hidden"
      }`}
    >
      <CompanyHead setToggleValue={setToggleValue} />
      <CompanyBody />
    </div>
  )
}

export default CompanySection