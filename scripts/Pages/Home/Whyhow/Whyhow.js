import React from "react";

const Whyhow = () => {
  return (
    <>
    <div className="mx-auto mt-[50px] md:mt-40">
      <h1 className="family-hatton text-lg leading-[22px] md:text-6xl text-center mx-auto text-black md:leading-[75px]">
      Save 50% off your first diffuser
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-9/12 mx-auto md:mx-0 md:place-self-end mt-e">
          <h1 className="text-base leading-5 md:text-2xl text-center mt-9 mb-3 underline md:no-underline md:mt-[89px] md:mb-[25px]">Why</h1>
          <p className="text-center md:mb-8 mx-auto text-base leading-5 md:font-medium md:text-{22px} md:leading-[27.61px] md:max-w-[434px] max-w-[306px]">
          After serving thousands of customers around the world, we have just launched in Germany. We want to introduce you to the magic of volant essential oils in the most beautiful and affordable way possible; through our handcrafted scent diffusers
          </p>
        </div>
        <div className="w-9/12 mx-auto md:mx-0">
          <h1 className="text-base leading-5 md:text-2xl text-center mt-9 mb-3 underline md:no-underline md:mt-[89px] md:mb-[25px]">How</h1>
          <p className="text-center md:mb-8 mx-auto text-base leading-5 md:font-medium md:text-{22px} md:leading-[27.61px] md:max-w-[434px] max-w-[306px]">
          Simply scroll down this page and add the Volant diffuser of your choice and any 3 oils to your cart. The discount will be automatically applied!<p className="hidden md:block mt-[14px]"> This promotion is available for a limited time, while supplies last. Order yours today before it’s too late.</p>
          </p>

        </div>
      </div>
      
    </div>

    </>
  );

};

export default Whyhow;
