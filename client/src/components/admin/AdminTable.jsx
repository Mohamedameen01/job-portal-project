import React from 'react'

function AdminTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-[#ffffff] text-center rounded-lg">
        <thead className="text-[#000000] border text-xs sm:text-base font-semibold">
          <tr>
            <td className="py-3">#</td>
            <td className="py-3">COMPANY</td>
            <td className="py-3">TOTAL JOBS</td>
            <td className="py-3">RATING</td>
            <td className="py-3">OPEN JOBS</td>
            <td className="py-3"></td>
          </tr>
        </thead>
        <tbody>
          {companyData?.map((data, index) => (
            <tr
              key={data.id}
              className="border-b px-2 capitalize text-xs sm:text-sm font-semibold tracking-wider"
            >
              <td className="py-3">{index + 1}</td>
              <td className="py-3">{data.company}</td>
              <td className="py-3">{data.totalJobs}</td>
              <td className="py-3">{handleRatingCount(data.rating)}</td>
              <td className="py-3">{data.available}</td>
              <td className="py-3">
                <Link
                  to={`/administrator/companies/${data.id}`}
                  className="bg-blue-600 text-white p-[4px] sm:px-3 sm:py-2 rounded-lg"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable