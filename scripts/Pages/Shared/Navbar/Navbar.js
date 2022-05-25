import React from "react";
import logo from "./volantlogo.png"; 
// import logo from "./VolantLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="absolute w-full z-50 md:z-10">
      <div class="announcement-bar text-center">
        <p class="announcement-bar__message text-black p-[5px] md:px-[55px] md:py-[5px] text-sm font-semibold">⭐⭐⭐⭐⭐ Over 100,000 happy customers</p>
      </div>
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-row md:flex-row justify-center md:justify-between items-center">
          <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-1 sm:mb-4 md:mb-0">
            <img className="h-[30px] he-custom" src={logo} alt="" />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </a>
          <div className="lg:w-2/5 hidden md:inline-flex lg:justify-end ml-auto md:ml-5 lg:ml-0">
            <a
              href="#getOfferNOw"
              style={{
                backgroundColor: "#DEAB5B",
              }}
              className="inline-flex buynow items-center bg-yellow-600 border-0 py-1 px-4 md:px-12 focus:outline-none hover:bg-gray-200 sm:rounded text-white text-sm leading-[17.5px] sm:text-base sm:mt-4 md:mt-0"
            >
              Buy now
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
