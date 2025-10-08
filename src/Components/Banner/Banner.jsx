import React from "react";
import Container from "../Container";
import payStore from "../../assets/fi_16076057.png";
import appStore from "../../assets/fi_5977575.png";
import bannerMainImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] pt-5 sm:pt-8 md:pt-14">
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
      </div>
    </>
  );
};

export default Banner;
