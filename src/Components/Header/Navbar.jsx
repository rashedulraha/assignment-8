import React from "react";
import mainLogo from "../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router";

const Navbar = () => {
  const ContributeButton = (
    <>
      <a
        href="https://github.com/rashedulraha"
        target="_blank"
        rel="noopener noreferrer"
        className=" btn text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none "
      >
        Contribute
      </a>
    </>
  );

  const navbarLink = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-5">
        <NavLink to={"/"}>
          <span className=" text-lg  font-normal md:font-semibold ">Home</span>
        </NavLink>
        <NavLink to={"/apps"}>
          <span className=" text-lg font-normal md:font-semibold">Apps</span>
        </NavLink>
        <NavLink to={"/installation"}>
          <span className="text-lg font-normal md:font-semibold">
            Installation
          </span>
        </NavLink>
        <NavLink to={"/PrivacyPolicy"}>
          <span className="text-lg font-normal md:font-semibold">
            PrivacyPolicy
          </span>
        </NavLink>
      </div>
    </>
  );
  const DropdownMenuBar = (
    <>
      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-gray-100   rounded-b-md z-1 mt-[13px] w-35 text-left "
        >
          <div className="bg-white rounded-md py-2  flex  flex-col gap-3 ">
            {navbarLink}
            <div className="flex sm:hidden"> {ContributeButton}</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="shadow-sm bg-white">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <a
              href="/"
              className="cursor-pointer text-xl flex items-center gap-1 "
            >
              <figure className="w-10 h-10 ">
                <img
                  className="w-full h-full object-contain"
                  src={mainLogo}
                  alt="Website Main logo"
                />
              </figure>
              <span className="font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                AppVibe
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal px-1">{navbarLink}</div>
          </div>
          <div className="navbar-end flex items-center gap-3">
            <div className="hidden sm:flex">{ContributeButton}</div>{" "}
            {DropdownMenuBar}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
