import React from "react";
import imageOne from "./image-33.svg";
import imageTwo from "./image-34.svg";
import imageThree from "./image-35.svg";
import imageFour from "./image-37.svg";
import imageFive from "./image-36.svg";
import imageSix from "./image-38.svg";

const EssentialOils = () => {
  return (
    <div>
      
        <div className="md:w-3/4 mx-auto md:h-full essentail_alignment">
            <h1 className="family-hatton flex flex-col items-center font-normal mb-9 md:mb-6 text-2xl">
            Volant Essential Oils
            <span className="text-base leading-5">From organic plants to your home</span>
            </h1>
            <div className="mx-auto w-[310px] md:w-[410px]">
              <div className="flex items-center mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageOne} alt="" />
                <p className="text-base leading-5 md:text-lg">Sourced ethically</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageTwo} alt="" />
                <p className="text-base leading-5 md:text-lg">Vegan and cruelty free</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageThree} alt="" />
                <p className="text-base leading-5 md:text-lg">
                  Sourced in 35+ countries from all continents
                </p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageFive} alt="" />
                <p className="text-base leading-5 md:text-lg">100% pure and certified organic</p>
              </div>
              <div className="flex items-center mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageFour} alt="" />
                <p className="text-base leading-5 md:text-lg">Picked at peak ripeness</p>
              </div>
              <div className="flex items-center mb-[69px] md:mb-8">
                <img className="mr-8 h-[50px] w-[50px]" src={imageSix} alt="" />
                <p className="text-base leading-5 md:text-lg">
                  Tested before, during and after distillation
                </p>
              </div>
              <a
                href="#getOfferNOw"
                style={{ backgroundColor: "#DEAB5B" }}
                className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22.59px] md:text-base mt-4 md:mt-8"
              >
                Get 50% off
              </a>
            </div>
        </div>
          
    </div>
  );
};

export default EssentialOils;
