import React from "react";
import heroimg from "./thisprocess.jpg";
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div>
      <div className="relative">
        
        <img src={heroimg} alt="" className="w-full h-auto md:h-auto hero_banner_img"/>
        <p className="text-white text-[15px] leading-[18px] max-w-[152px] md:text-[34px] md:leading-[42px] absolute left-[37px] top-[35px] md:left-[71px] md:top-[45%] md:max-w-[561px]">
          <b>This process</b> creates a fine mist of aroma that scents your entire space, naturally and effectively.
        </p>
          
      </div>
    </div>
  );
};

export default HeroBanner;
