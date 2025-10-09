import { Eye, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ singProduct }) => {
  const {
    image,
    companyName,
    downloads,
    title,
    size,
    shortDescription,
    ratingAvg,
    id,
  } = singProduct;

  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition ease-in">
      <div className="card">
        <figure className="w-full h-48">
          <img
            src={image}
            alt={shortDescription}
            className=" rounded-lg object-cover"
          />
        </figure>

        <div className="ml-4 mt-5 space-y-2">
          <h2 className="text-xl font-bold text-gray-800 truncate">{title}</h2>
          <p className="text-purple-900 my-3 bg-purple-100 font-semibold text-center px-2 py-[2px]  ">
            {companyName}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 pb-6 ">
        <p className="text-gray-600 mb-4">{shortDescription}</p>

        {/* Stats */}
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Size</p>
            <p className="font-semibold">{size}MB</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Downloads</p>
            <p className="font-semibold">{downloads}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Rating</p>
            <div className="flex items-center justify-center">
              <span className="font-semibold mr-1">{ratingAvg}</span>
              <span>
                <Star size={18} color="#facc15" />
              </span>
            </div>
          </div>
        </div>

        {/* view Button */}

        <Link
          to={`/productDetails/${id}`}
          className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-3 capitalize cursor-pointer"
        >
          <Eye size={20} strokeWidth={2.25} />
          view app details
        </Link>
      </div>
    </div>
  );
};

export default AppsCard;
