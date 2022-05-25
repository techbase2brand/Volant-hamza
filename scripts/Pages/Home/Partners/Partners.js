import React from "react";
import partner1 from "./partner1.png";
import partner2 from "./partner2.png";
import partner3 from "./partner3.png";
import partner4 from "./partner4.png";
import partner5 from "./partner5.png";

const Partners = () => {
  return (
    <div className="mt-20">
      <div className="px-8 md:px-0 md:w-9/12 mx-auto">
        <h1 className="mb-10 text-center text-[22px] leading-[27px] md:text-[32px] md:leading-10 family-hatton">
        Selected partners
        </h1>
        <div className="flex flex-wrap items-center md:grid md:grid-cols-5 gap-8">
          <img src={partner1} alt="" className="mx-auto h-full md:h-auto max-w-[100px] md:max-w-none"/>
          <img src={partner2} alt="" className="mx-auto h-full md:h-auto max-w-[100px] md:max-w-none"/>
          <img src={partner3} alt="" className="mx-auto h-full md:h-auto md:w-full max-w-[300px] md:max-w-none"/>
          <img src={partner4} alt="" className="mx-auto h-full md:h-auto max-w-[90px] md:max-w-none"/>
          <img src={partner5} alt="" className="mx-auto h-full md:h-auto max-w-[90px] md:max-w-none"/>
        </div>
      </div>
    </div>
  );
};

export default Partners;
