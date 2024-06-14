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
      stars.push(<IoIosStar key={`star${i}`} />);
    }
    if (halfStar) {
      stars.push(<IoIosStarHalf key={`half-star`} />);
    }

    return <div className="flex justify-center">{stars}</div>;
  };

  return (
    <div>
      <table className="bg-[#ffffff] w-full text-center rounded-lg">
        <thead className="text-[#000000] border text-sm font-semibold">
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
            <tr key={data.id} className="border-b px-2 capitalize text-sm">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">{data.company}</td>
              <td className="py-3">{data.totalJobs}</td>
              <td className="py-3">{handleRatingCount(data.rating)}</td>
              <td className="py-3">{data.available}</td>
              <td className="py-3">
                <Link
                  to={`/administrator/companies/${data.id}`}
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
