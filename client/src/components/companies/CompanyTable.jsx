import React from "react";
import { companyData } from "../../utils/table-datas";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

function CompanyTable() {
  const handleRatingCount = (count) => {
    const fullStar = Math.floor(count);
    const halfStar = count % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStar; i++) {
      stars.push(<IoIosStar />);
    }
    if (halfStar) {
      stars.push(<IoIosStarHalf />);
    }

    return <div className="flex justify-center">{stars}</div>;
  };

  return (
    <div>
      <table className="w-full text-center border-2 border-cyan-600 rounded-lg">
        <thead className="bg-[#8B93FF] text-[#FFF7FC] text-sm">
          <tr>
            <th className="py-2">COMPANY</th>
            <th className="py-2">TOTAL JOBS</th>
            <th className="py-2">RATING</th>
            <th className="py-2">OPEN JOBS</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {companyData?.map((data) => (
            <tr key={data.id} className="border-b border-blue-400 px-2">
              <td className="py-2">{data.company}</td>
              <td className="py-2">{data.totalJobs}</td>
              <td className="py-2">{handleRatingCount(data.rating)}</td>
              <td className="py-2">{data.available}</td>
              <td className=" py-2">
                <Link
                  to={`/admin/companies/${data.id}`}
                  className="bg-[#8B93FF] text-[#FFF7FC] px-3 py-1 rounded-lg"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;
