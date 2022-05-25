import React from "react";
import "./Banner.css";
import banner from "./banner.png";
import play from "./play.png";
import volantPhone from "./VOLANT-phone1.jpg";
import Navbar from "../../Shared/Navbar/Navbar";

const Banner = () => {
  return (
    <div>
      
      <div className="relative overflow-hidden h-[544px] md:h-screen custom_bg_banner" style={{ background: `url(${volantPhone})` }}>
        
        <Navbar></Navbar>
        <img
          src={banner}
          className="hidden md:block absolute h-full w-full md:object-cover"
        />
        <img
          src={volantPhone}
          className="hidden absolute h-full w-full md:object-cover"
        />
        <div className="hidden md:block inset-0 bg-black opacity-25 absolute"></div>
        <div className="z-10 flex h-full items-center">
          <div className="pl-e mx-auto pt-24 pb-[38px] md:py-0 md:mx-0 md:ml-auto w-full h-full md:h-auto md:mr-[42px] items-center justify-between md:justify-start lg:w-3/5 xl:w-2/5 flex flex-col relative z-10 md:mt-[168px]">
            <div className="text-center">
            <h1 className="hidden md:block family-hatton text-[30px] leading-[40px] mx-auto text-white mt-4 banner_heading">
            Buy three oils:
            </h1>
              <h1 className="hidden md:block family-hatton text-[42px] leading-[40px] mx-auto text-white mt-4 banner_heading">
              Get 50% off the diffuser
              </h1>
              <p className="text-white hidden md:block mx-auto text-base leading-5 md:text-[22px] md:leading-[27.6px] mt-[42px] mb-[42px] banner_subheading">
              Scent your home 100% naturally with our beautiful, award-winning diffuser and organic essential oils.
              </p>
              <p className="text-white mx-auto family-hatton text-[18px] leading-[27px] text-center mt-[5px] px-1 md:hidden">
            Buy three oils:
            </p>
              <p className="text-white mx-auto family-hatton text-[22px] leading-[27px] text-center mt-[5px] px-1 md:hidden">
              Get 50% off the diffuser
              </p>
              <p className="text-white mx-auto leading-[25px] text-center max-w-[359px] mt-[10px] md:hidden  text-[18px]">
              Scent your home 100% naturally with our beautiful, award-winning diffuser and organic essential oils.
              </p>
            </div>
            <div>
              <a
                style={{ background: "#DEAB5B" }}
                href="#getOfferNOw"
                className="block mx-auto text-center w-max font-mulish py-2 md:py-3 px-12 md:px-24 rounded md:text-2xl md:leading-[30px] text-white font-medium md:mt-4"
              >
                Get 50% off
              </a>
              <div className="md:w-3/4 mx-auto mt-1 md:mt-4 flex justify-center items-center">
                <p className="text-white text-base md:text-[22px] leading-5 md:leading-[27px] ">Only for new customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
