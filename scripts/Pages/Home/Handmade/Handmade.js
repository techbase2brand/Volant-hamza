import React from "react";
import award from "./award.png";
import candles from "./candles.png";
import ceramic from "./ceramic.png";
import clock from "./clock.png";
import home from "./home.png";
import oils from "./oils.png";
import scents from "./scents.png";
import volant from "./volant.png";

const Handmade = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <h1 className="text-3xl font-semibold text-center my-16">
          Our Handmade, Designer Diffuser
        </h1>
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
      </div>
    </div>
  );
};

export default Handmade;
