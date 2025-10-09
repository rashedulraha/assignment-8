import React from "react";
import downLoadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import ReviewsImg from "../../assets/icon-review.png";
import Container from "../../Components/Container";
import { localUpdateApps } from "../../Utils/LocalStorage";

const ProductDetails = ({ findProduct }) => {
  const {
    image,
    title,
    companyName,
    ratingAvg,
    reviews,
    size,
    fullDescription,
    downloads,
  } = findProduct || {};

  return (
    <>
      <Container>
        <div className="flex items-start  gap-5 ">
          <div className="flex-1 w-full h-full">
            <figure className="  rounded-md  overflow-hidden">
              <img className="w-full h-full" src={image} alt="product image" />
            </figure>
          </div>
          <div className="flex-2">
            <div className="space-y-1">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-zinc-900">
                {title}
              </h2>
              <p className="text-gray-500 font-normal text-lg">
                Developed by{" "}
                <span className="text-info cursor-pointer">{companyName}</span>
              </p>
            </div>
            <hr className="text-zinc-300 mt-5 font-bold" />

            <div className="flex items-center mt-5 md:mt-6 gap-10 ">
              <div className="flex items-center justify-center flex-col space-y-1">
                <figure>
                  <img src={downLoadImg} alt="download" />
                </figure>
                <p>Downloads </p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {downloads}
                </span>
              </div>
              <div className="flex items-center justify-center flex-col  space-y-1">
                <figure>
                  <img src={ratingImg} alt="download" />
                </figure>
                <p>Average Ratings </p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {ratingAvg}
                </span>
              </div>
              <div className="flex items-center justify-center flex-col  space-y-1">
                <figure>
                  <img src={ReviewsImg} alt="download" />
                </figure>
                <p>Total Reviews </p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {reviews}
                </span>
              </div>
            </div>

            <button
              onClick={() => localUpdateApps(findProduct)}
              className=" btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white mt-5"
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>

        {/* product description  */}
        <div className="mt-5 md:mt-10">
          <h2 className="text-lg md:text-2xl font-semibold text-zinc-900 border-b-2 border-gray-900 w-fit mb-3 ">
            Description
          </h2>
          <p className="text-zinc-500 text-base">{fullDescription}</p>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
