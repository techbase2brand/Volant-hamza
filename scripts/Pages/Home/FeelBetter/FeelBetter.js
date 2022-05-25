import React from "react";
import imgleft from "./feel1.png";
import imgright from "./feel2.png";

const FeelBetter = () => {
  return (
    <div>
      <div className="px-8 md:px-0 md:mx-[108px] mx-auto mt-[38px] md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
            <div className="md:justify-self-end">
              <img src={imgleft} alt="" />
            </div>
            <div className="flex flex-col self-center md:justify-self-start">
                <h1 className="family-hatton text-[22px] leading-[27px] md:text-[32px] md:leading-[40px] my-4 md:mt-4 text-center">Feel better with volant</h1>
                <p className="mx-auto my-4 md:my-[43px] text-center max-w-[314px] md:max-w-[549px] text-base leading-5 md:text-[22px] md:leading-7">
                Designed to optimally infuse your indoor space with essential oil scents, that will help you feel more energy, focus and calm. All of this - at the touch of a button.
                </p>
                <a 
                    href="#getOfferNOw"
                    style={{ backgroundColor: "#DEAB5B" }}
                    className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22px] md:text-2xl mt-4 md:mt-8"
                    >
                    Get 50% off
                </a>
            </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-[74px]">
          
            
          <div className="flex flex-col self-center order-2 md:order-1">
            <h1 className="family-hatton text-[22px] leading-[27px] md:text-[32px] md:leading-[40px] my-4 md:mt-4 text-center">A life without chemicals</h1>
            <p className="mx-auto my-4 md:my-[43px] text-center max-w-[314px] md:max-w-[549px] text-base leading-5 md:text-[22px] md:leading-7">
              An average scented candle burns chemicals for 35 hours. One bottle of Volant Essential Oil scents your home for 200+ hours with a 100% natural and fresh aroma.
            </p>
            <a
                href="#getOfferNOw"
                style={{ backgroundColor: "#DEAB5B" }}
                className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22px] md:text-2xl mt-4 md:mt-8"
                >
                Get 50% off
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img src={imgright} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeelBetter;