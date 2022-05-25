import React from "react";
import tech from "./tech.png";
import award from "./award.svg";
import candles from "./effective.svg";
import ceramic from "./ceramic.svg";
import clock from "./clock.svg";
import home from "./home.svg";
import oils from "./oils.svg";
import scents from "./scents.svg";
import volant from "./tech.svg";
import silent from "./silence.png";
import silentsvg from "./silence.png";

const OurTechnology = () => {
  return (
    <div>
      <div style={{ background: "rgba(255, 238, 223, 0.5)" }} className="pt-[49px] md:pt-[141px]">
      <h1 className="hidden md:block family-hatton text-[50px] leading-[63px] mb-4 text-center">The unique volant™ technology</h1>
      <h1 className="md:hidden family-hatton text-[22px] leading-[27px] mb-4 text-center customized_title">The unique volant™ technology</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-12 px-8 md:px-0 md:w-9/12">
          <div className="mx-auto">
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={award} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                2022 Award-winning Scandinavian design
              </p>
            </div>
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={home} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                Scents up to 40 square meters of your home
              </p>
            </div>
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={ceramic} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                Handmade using sustainable, high quality ceramic
              </p>
            </div>
            <div className="flex items-center mb-8 md:mb-0">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={candles} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                6-10 times more cost effective than scented candles
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={clock} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                4-8 hours runtime and adjustable LED-light
              </p>
            </div>
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={scents} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                Scents your home without the use of heat and turns off
                automatically
              </p>
            </div>
            <div className="flex items-center mb-8">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={volant} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                Unique volant technology with 2.2 million vibrations per
                second
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-[40px] mr-[25px] md:mr-8 md:w-[65px]" src={silentsvg} alt="" />
              <p className="text-base leading-5 md:text-inherit max-w-[273px]">
                Noise level below 35 dB
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto pt-12 md:pb-36 px-8 md:px-0 md:w-11/12">
          <div className="mx-auto">
            <img src={tech} alt="" />
          </div>
          <div className="mx-auto">
            <div className="">
              <div className="my-[57px] md:my-24 text-center">
                <p className="font-mulish mx-auto md:font-bold text-lg leading-[22px] md:text-[34px] md:leading-[42px] mt-7 mb-6 md:w-9/12">
                <b>A ceramic plate</b> inside our diffuser vibrates 2.5 million times per second to break down the essential oils and blend it perfectly with water.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
