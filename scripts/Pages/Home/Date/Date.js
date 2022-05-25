import React from "react";
import date from "./date.jpg";
import Satisfaction from "../Satisfaction/Satisfaction";
import EssentialOils from "../EssentialOils/EssentialOils";

const Date = () => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto my-12 px-10 md:mt-[50px] md:py-12 md:w-11/12">
          
          <div className=" hidden md:block mx-auto order-2 md:order-1">
            <Satisfaction />
          </div>
          <div className=" md:hidden order-2 mt-24">
            <EssentialOils />
          </div>
          <div className="order-1 md:order-2">
          <h1 className="md:hidden text-center family-hatton text-[22px] leading-[27px] text-center md:text-left md:text-[50px] md:leading-[63px] my-4 font-normal">or even your date</h1>
            <img src={date} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
