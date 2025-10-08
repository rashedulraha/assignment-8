import React from "react";
import Container from "../Container";
import payStore from "../../assets/fi_16076057.png";
import appStore from "../../assets/fi_5977575.png";
import bannerMainImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className=" pt-5 sm:pt-8 md:pt-14">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-7xl  font-bold text-center  capitalize text-[#182f44] leading-10  sm:leading-14 md:leading-20">
              We Build <br />{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="mt-4 text-[#627382] text-sm md:text-lg text-center">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-3">
              <a className="btn font-semibold text-lg ">
                <figure className="w-8 h-4 overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={payStore}
                    alt="play Store image"
                  />
                </figure>
                Google Play
              </a>
              <a className="btn text-lg font-semibold">
                <figure>
                  <img src={appStore} alt="app Store image" />
                </figure>
                App Store
              </a>
            </div>
          </div>
          <div className="mt-5 md:mt-10 flex items-center justify-center">
            <figure>
              <img w-full h-full src={bannerMainImage} alt="banner main img" />
            </figure>
          </div>
        </Container>

        <div className="p-5 sm:p-8 md:p-12 bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">
          <Container>
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center text-white">
              Trusted by Millions, Built for You
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 md:mt-10">
              <div className="text-center space-y-2 mt-3  ">
                <p className="text-white opacity-[0.8]">Total Downloads</p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-6xl font-semibold text-center ">
                  29.6M
                </h2>
                <p className="text-white opacity-[0.8]">
                  21% more than last month
                </p>
              </div>
              <div className="text-center space-y-2 mt-3 md:mt-5 ">
                <p className="text-white opacity-[0.8]">Total Reviews</p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-6xl font-semibold text-center ">
                  906K
                </h2>
                <p className="text-white opacity-[0.8]">
                  46% more than last month
                </p>
              </div>
              <div className="text-center space-y-2 mt-3 md:mt-5 ">
                <p className="text-white opacity-[0.8]">Active Apps</p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-6xl font-semibold text-center ">
                  132+
                </h2>
                <p className="text-white opacity-[0.8]">31 more will Launch</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Banner;
