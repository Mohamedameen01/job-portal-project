import React, { useEffect } from 'react'
import { CompanyBody, CompanyHead } from '../../../../components/job-portal/employer/single-company'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getSelectedCompany } from '../../../../redux/employerSlice';

function SingleEmployerCompany() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedCompany(id))
  }, [dispatch, id])
  return (
    <div className="bg-white mt-20">
      <CompanyHead />
      <div className="mx-[15px] md:mx-[30px] xl:mx-[50px]">
        <CompanyBody />
      </div>
    </div>
  )
}

export default SingleEmployerCompany