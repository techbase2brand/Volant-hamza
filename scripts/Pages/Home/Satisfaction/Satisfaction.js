import React from "react";
import './satisfaction.css';

const Satisfaction = () => {
  return (
    <div>
        <div className="">
            <div className="my-24 text-center">
            <div className="flex justify-center">
                <img src="https://cdn.shopify.com/s/files/1/0473/9999/3493/t/3/assets/pf-ae03b4f0--verifycircularblackbuttonsymbol.svg"
                    className="w-24 h-24" />
            </div>
            <h1 className="family-hatton text-center text-xl leading-[25px] md:text-[32px] mx-auto text-black md:leading-{40px} mt-[53px]">
                100% satisfaction guarantee
            </h1>
            <p className="font-mulish mx-auto text-base leading-5 md:font-bold md:text-[26px] md:leading-[32px] mt-7 max-w-[333px] md:max-w-none md:w-9/12">
            We are confident that you’ll love the Volant Diffuser. Try it for <b>90 days</b> in your home, and in the unlikely event that you want to return it, we offer a free return and a full refund - no questions asked.
            </p>
            </div>
        </div>
    </div>
  );
};

export default Satisfaction;
