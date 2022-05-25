import React from "react";
import imgleft from "./feel2.jpg";
import imgright from "./feels2.png";
import imgmob from "./feel3.jpg";

const FeelBetterSecond = () => {
  return (
    <div>
      <div className="px-8 md:px-0 md:mx-[108px] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          
            <div className="order-2 md:order-1">
              <img src={imgleft} alt="" className="hidden md:block"/>
              <img src={imgmob} alt="" className="md:hidden"/>
            </div>
            <div className="flex flex-col self-center order-1 md:order-2">
                <h1 className="family-hatton text-[22px] leading-[27px] md:text-[45px] md:leading-[56px] mb-8 md:my-4 text-center">so you can feel<br/> better</h1>
                
            </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-[79px]">
          
            
          <div className="flex flex-col self-center">
                <h1 className="family-hatton text-[22px] leading-[27px] md:text-[45px] md:leading-[56px] mb-8 md:my-4 text-center">And your guests can enjoy the luxurious smell of your home.</h1>
               
            </div>
            <div>
              <img src={imgright} alt="" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeelBetterSecond;