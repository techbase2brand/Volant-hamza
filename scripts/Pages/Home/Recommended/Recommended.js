import React from "react";
import bazar from "./bazar.jpeg";
import cosmopolitan from "./cosmopolitan.png";
import ellie from "./ellie.png";
import instyle from "./instyle.png";
import vogue from "./vogue.png";
import forbes from "./forbes-logo.png";
import kinfolk from "./kinfolk.png";
import womenshealth from "./Womenshealth.svg";
import useScreenType from "react-screentype-hook";

const Recommended = () => {
  const screenType = useScreenType();


  return (
    <div className="mb-10" id={screenType.isMobile ? 'videoSection' : ''}>
      <div className="w-[300px] sm:w-11/12 mx-auto">
        <h1 className="family-hatton text-sm leading-[17px] mt-10 mb-[26px] sm:mb-3 text-center sm:font-semibold sm:text-[28px] sm:leading-[35.28px]">
          Tested and recommended by
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
          <img src={vogue} alt="" className="w-[83px] md:w-auto"/>
          <img src={ellie} alt="" className="w-[48px] md:w-auto"/>
          <img src={instyle} alt="" className="w-[71px] md:w-auto"/>
          <img src={cosmopolitan} alt="" className="w-[81px] md:w-auto"/>
          <img src={bazar} alt="" className="w-[76px] md:w-auto"/>
          <img src={womenshealth} alt="" className="w-[88px] md:w-auto"/>
        </div>
        <div className="sm:hidden grid grid-cols-2 gap-0 pt-4 items-center justify-items-center">
          <img src={forbes} alt="" className="w-[60px] md:w-auto" />
          <img src={kinfolk} alt="" className="w-[110px] md:w-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
