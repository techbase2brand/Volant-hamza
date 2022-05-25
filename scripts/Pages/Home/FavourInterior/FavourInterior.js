import React from "react";
import imgleft from "./favour1.jpg";
import imgright from "./favour2.jpg";

const FavourInterior = () => {
  return (
    <div>
      <div style={{ background: "rgba(255, 238, 223, 0.5)" }} className="px-8 md:px-0 py-[57px] md:py-32">
        <div className="md:mx-[108px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-16">
            <div className="mx-auto">
              <div>
                <h1 className="mb-6 md:my-12 text-[22px] leading-[27px] font-bold text-center headline md:hidden">
                A favour for your interior
                </h1>
                <img src={imgleft} alt="" />
                <p className="text-sm leading-[17px] md:text-lg md:leading-[22.59px] mt-9 text-center">
                Diffusers harness the amazing power of essential oils to improve the air in your home, creating the same refreshing feeling as standing next to a waterfall. A volant diffuser is the simplest way to enjoy the 100% natural benefits of essential oils.
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <h1 className="my-12 text-3xl font-bold text-center headline hidden md:block">
              A favour for your interior
              </h1>
              <div>
                <img src={imgright} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavourInterior;