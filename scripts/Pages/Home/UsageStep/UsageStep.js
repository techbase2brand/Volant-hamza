import React from "react";
import useScreenType from "react-screentype-hook";
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";
import step1mob from "./step1.svg";
import step2mob from "./step2.svg";
import step3mob from "./step3.svg";

const UsageStep = () => {

  const screenType = useScreenType();

  return (
    <div>
      <div className="mt-[38px] md:mt-28 mb-6 md:mb-[150px]">
      <h1 className="family-hatton text-[18px] leading-[22px] md:text-[50px] md:leading-[63px] my-4 text-center customized_title">All you need to do to scent your home</h1>
        <div className="grid grid-cols-3 mx-auto my-12 items-baseline md:py-12 px-5 md:px-0 md:w-11/12">
          <div className="mx-auto text-center">
            <div className="relative">
              <img src={step1mob} alt="" className="mx-auto mb-[31px] md:mb-0 md:w-auto h-[100px] md:h-auto"/>
              <h1 className="block absolute top-0 right-[25%] font-bold family-hatton text-l md:text-4xl text-[#DCAA5B]">1.</h1>
            </div>
            <p className="text-[14px] md:text-[22px] leading-[17.57px] md:leading-[27px] w-[111px] md:w-[330px] md:mt-6">Add water and 20-25 drops of volant essential oils.</p>
          </div>
          <div className="mx-auto text-center">
            <div className="relative">
              <img src={step2mob} alt="" className="mx-auto mb-[31px] md:mb-0 md:w-auto h-[100px] md:h-auto" />
              <h1 className="block absolute top-0 right-[25%] font-bold family-hatton text-l md:text-4xl text-[#DCAA5B]">2.</h1>
            </div>
            <p className="text-[14px] md:text-[22px] leading-[17.57px] md:leading-[27px] w-[111px] md:w-[330px]  md:mt-6">Put the stone cover back on.</p>
          </div>
          <div className="mx-auto text-center">
            <div className="relative">
              <img src={step3mob} alt="" className="mx-auto mb-[31px] md:mb-0 md:w-auto h-[100px] md:h-auto" />
              <h1 className="block absolute top-0 right-[25%] font-bold family-hatton text-l md:text-4xl text-[#DCAA5B]">3.</h1>
            </div>
            <p className="text-[14px] md:text-[22px] leading-[17.57px] md:leading-[27px] w-[111px] md:w-[330px]  md:mt-6">Select time interval: 4 or 8 hours.</p>
          </div>
        </div>
        <div className="hidden md:block">
            <h1 className="family-hatton text-[34px] leading-[42px] my-4 md:mt-4 md:mb-[45px] text-center">Why use a volant diffuser?</h1>
            <p className="mx-auto text-center w-[597px] text-[22px] leading-7">
            The volant diffuser helps you bring nature's richest benefits into your home, office or anywhere else. If you're yearning for more energy, sleep, focus or relaxation, volant's diffuser and essential oils are the answer.
            </p>
            <a
                href="#getOfferNOw"
                style={{ backgroundColor: "#DEAB5B" }}
                className="block mx-auto w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-2xl mt-4 md:mt-8"
                >
                Get 50% off
            </a>
        </div>
      </div>
    </div>
  );
};

export default UsageStep;
