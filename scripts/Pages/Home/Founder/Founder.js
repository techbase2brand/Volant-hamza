import React from "react";
import imgright from "./founder.png";

const Founder = () => {
  return (
    <div>
      <div className="px-8 md:px-0 md:w-9/12 mx-auto mt-[90px] md:mt-[116px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mt-[74px]">
          
            <div>
              <img src={imgright} alt="" />
            </div>
            <div className="flex flex-col self-center">
                <h1 className="family-hatton text-[22px] leading-[27px] md:text-[32px] md:leading-[40px] my-4 text-center">Our founder</h1>
                <p className="mx-auto text-center max-w-[332px] text-base leading-5 md:max-w-[555px] md:text-[30px] md:leading-9 mb-5">
                "I had just refurbished my apartment in Oslo and wanted a diffuser that went well with my Scandinavian style. I couldn't find one, so I made one."
                </p>
                <h1 className="text-lg leading-[22px] md:text-[22px] md:leading-7 text-center">Daniel Hoftun</h1>
                <span className="font-bold text-sm leading-[17px] md:text-base md:leading-5 text-center">Volant Founder</span>
                <a
                    href="#getOfferNOw"
                    style={{ backgroundColor: "#DEAB5B" }}
                    className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22px] md:text-2xl mt-6 md:mt-8"
                    >
                    Get 50% off
                </a>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Founder;