import React, { useEffect } from 'react'
import HomeDashboard from '../../../../../components/job-portal/employee/dashboard/home/HomeDashboard'
import { useDispatch } from 'react-redux';
import { getAppliedJobs, getBookMarkedJobs } from '../../../../../redux/employeeSlice';

function EmployeeDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppliedJobs());
    dispatch(getBookMarkedJobs());
  },[dispatch])

  return (
    <>
      <HomeDashboard />
    </>
  )
}

export default EmployeeDashboard