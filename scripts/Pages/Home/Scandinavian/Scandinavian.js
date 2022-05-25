import React from "react";
import './scandinavian.css';
import scandinavian from "./scandinavian.jpg";

const Scandinavian = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-11/12 justify-center items-center mx-auto mb-[73px] md:mb-40 scan_spacing">
        <div className="w-11/12 md:pb-12 md:w-[610px] mx-auto text-center order-2 md:order-none">
          <h1 className="text-[22px] leading-7 md:text-[32px] md:leading-10 text-center mt-[46px] mb-7 md:my-8 family-hatton">
            Beautiful Scandinavian Design
          </h1>
          <p className="text-base md:text-[22px] md:leading-7 font-normal mb-8 max-w-[319px] md:max-w-none mx-auto md:w-auto">
            Our handmade diffuser fills your home with the wonderful scents of
            essential oils to help you feel more energised and calm.
          </p>
          <p className="text-base md:text-[22px] md:leading-7 font-normal max-w-[319px] md:max-w-none mx-auto md:w-auto">
            The unique Scandinavian design makes it the perfect accent for any
            room and it creates an amazing atmosphere in your home.
          </p>
        </div>
        <div className="flex justify-end scan_spacing_img order-1 md:order-none">
          <img src={scandinavian} alt="" className="w-full md:w-[546px]"/>
        </div>
      </div>
    </div>
  );
};

export default Scandinavian;
