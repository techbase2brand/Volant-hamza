import React from "react";
import tech from "./tech.png";

const OurTechnology = () => {
  return (
    <div>
      <div className="">
      <h1 className="family-hatton text-[50px] leading-[63px] my-4 text-center">Our unique volant™ technology</h1>
        
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-12 w-9/12">
          <div className="mx-auto">
            <div className="flex-none md:flex items-center mb-8">
              <img className="md:mr-8" src={award} alt="" />
              <p>
                2022 Award-winning Scandinavian <br /> design
              </p>
            </div>
            <div className="flex-none md:flex items-center mb-8">
              <img className=" md:mr-8" src={home} alt="" />
              <p>
                Scents up to 40 square meters of <br /> your home
              </p>
            </div>
            <div className="flex-none md:flex items-center mb-8">
              <img className=" md:mr-8" src={ceramic} alt="" />
              <p>
                Handmade using sustainable, high <br /> quality ceramic
              </p>
            </div>
            <div className="flex-none md:flex items-center">
              <img className=" md:mr-8" src={candles} alt="" />
              <p className="">
                6-10 times more cost effective than <br /> scented candles
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex-none md:flex items-center mb-8">
              <img className=" md:mr-8" src={clock} alt="" />
              <p>
                4-8 hours runtime and adjustable <br /> LED-light
              </p>
            </div>
            <div className="flex-none md:flex items-center mb-8">
              <img className="md:mr-8" src={scents} alt="" />
              <p>
                Scents your home without the use <br /> of heat and turns off
                automatically
              </p>
            </div>
            <div className="flex-none md:flex items-center mb-8">
              <img className="md:mr-8" src={volant} alt="" />
              <p>
                Unique volant technology with 2.2 <br /> million vibrations per
                second
              </p>
            </div>
            <div className="flex-none md:flex items-center">
              <img className="md:mr-8" src={oils} alt="" />
              <p>
                100% pure and certified organic <br /> essential oils
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center mx-auto my-12 py-12 w-11/12">
          <div className="mx-auto">
            <img src={tech} alt="" />
          </div>
          <div className="mx-auto">
            <div className="">
            <div className="my-24 text-center">
              <p className="font-mulish mx-auto font-bold text-[34px] leading-[42px] mt-7 mb-6 w-9/12">
              <b>A ceramic plate</b> inside our diffuser vibrates 2.5 million times per second to break down the essential oils and blend it perfectly with water.
              </p>
              <button
                style={{ backgroundColor: "#DEAB5B" }}
                className="block mx-auto items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-2xl mt-4 md:mt-8"
              >
                GET 50% OFF
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
