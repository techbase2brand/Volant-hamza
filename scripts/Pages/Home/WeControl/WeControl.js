import React from "react";
import './wecontrol.css';
import imgdiff from "./diffdesktop.png";
import imgbox from "./Box-1.png";
import imgdiffmob from "./WhiteVolantDiffuser.png";
import imgoilmob from "./Group7mob.svg";
import imgoilbottle from "./Oil-Bottle.png";

import imgleft from "./Groupleftdesk.svg";
import imgright from "./Grouprightdesk.svg";
import imgrightmob from "./Groupmobright.svg";
import imgleftmob from "./Groupmobleft.svg";


const WeControl = () => {
  return (
    <div>
      <div className="px-8 md:px-0 md:w-9/12 mx-auto mt-[90px] md:mt-[154px]">
      <h1 className="family-hatton text-[22px] leading-[27px] md:text-[30px] md:leading-[56px] mb-4 md:mb-12 text-center text-[#000000]">We control everything from production to delivery</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 md:gap-16">
          
            <div className="bg-[#F5F5F5] pt-[24px] pb-[26px] md:py-[52px] rounded-[20px] md:ml-3 md:mr-[19px] md:mx-auto">
              <h1 className="text-lg leading-[22.59px] md:text-[34px] text-center md:leading-[42.6px] mb-[48px] md:mb-[38px] text-[#4A3F3C]">So we can bring you sustainable</h1>
              <div className="flex justify-around grid-cols-2 pb-[47px] items-end md:pb-0 md:mb-[47px] md:grid-cols-3 md:items-center justify-items-center">
                {/* <img src={imgdiff} alt="" className="hidden md:block"/> */}
                
                <div className="relative md:self-center md:place-self-end md:ml-[20%]">
                  <img src={imgdiffmob} alt="" className="md:hidden place-self-end max-w-[175px]"/>
                  <img src={imgdiff} alt="" className="hidden md:block place-self-end max-w-[195px]"/>
                  
                  <div className="absolute rotate-180 md:rotate-90 w-[1px] h-[19px] md:h-9 right-[66px] md:left-0 top-[4px] md:top-[32%] bg-black"></div>
                  <h1 className="absolute text-[13px] leading-4 md:text-base md:leading-5 -top-[15px] md:top-[34%] left-[14px] md:-left-[90%] text-[#4A3F3C]"><b>Sustainable</b> ceramic</h1>

                  <div className="absolute rotate-180 w-[1px] h-[19px] md:h-9 left-1/2 -bottom-[22px] md:-bottom-[30px] bg-black"></div>
                  <h1 className="absolute text-[13px] leading-4 md:text-base md:leading-5 -bottom-[46px] md:-bottom-[58px] left-[18px] text-[#4A3F3C]"><b>Recycled</b> materials</h1>
                </div>
                <div className="relative md:self-end md:place-self-start">
                  <img src={imgoilbottle} alt="" className="max-w-[143px] md:max-w-[168px]"/>
                  
                  <div className="absolute rotate-180 w-[1px] h-[19px] md:h-9 left-1/2 -top-[20px] md:-top-[30px] bg-black"></div>
                  <h1 className="absolute text-[13px] leading-4 md:text-base md:leading-5 -top-[44px] md:-top-[58px] left-[14px] text-[#4A3F3C]"><b>Recycled</b> bioplastic</h1>

                  <div className="absolute rotate-180 w-[1px] h-[19px] md:h-9 left-1/2 -bottom-[22px] md:-bottom-[30px] bg-black"></div>
                  <h1 className="absolute text-[13px] leading-4 md:text-base md:leading-5 -bottom-[46px] md:-bottom-[58px] left-[40px] text-[#4A3F3C]"><b>Glass</b> bottle</h1>
                </div>
                {/* <img src={imgbox} alt="" className="hidden md:block"/> */}

                <div className="relative self-end hidden md:block md:place-self-start md:self-end h-[300px] w-[390px]">
                  <img src={imgbox} alt="" className="md:self-center max-w-[303px] absolute top-[110px]"/>
                  
                  <div className="absolute rotate-180 w-[1px] h-9 left-1/2 top-[70px] bg-black"></div>
                  <h1 className="absolute text-base leading-5 top-[45px] left-[75px] text-[#4A3F3C]"><b>100% recyclable</b> emballage</h1>
                </div>

              </div>
            </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 md:gap-16 mt-[23px] md:mt-[74px]">
          
            <div className="bg-[#BCB19C] pt-[24px] pb-[26px] md:py-[54px] rounded-[20px] md:ml-3 md:mr-[19px] md:mx-auto">
              <h1 className="text-lg text-white leading-[22.59px] md:text-[34px] text-center md:leading-[42.6px] mb-[38px] md:mb-[62px]">and affordable products</h1>
              <div className="grid gap-3 md:flex grid-cols-2 md:justify-start px-2 md:px-0 items-end md:items-end justify-items-center mt-1.5 md:mt-0 mb-[48px] md:mb-[94px] wecontrol_image">
                
                <div className="place-self-end relative md:ml-[29%]">
                  <img src={imgleft} alt="" className="hidden md:block md:ml-[0px]"/>
                  <img src={imgleftmob} alt="" className="md:hidden"/>
                  <div className="absolute rotate-90 w-[1px] h-[12px] md:h-9 -left-[16px] md:-left-[38px] top-[0px] md:-top-[14px] bg-white"></div>
                  <h1 className="absolute text-[10px] leading-4 md:text-base md:leading-5 w-[60px] md:w-auto -top-[10px] md:-top-[5px] -left-[84px] md:-left-[172px] text-white"><b>What you pay</b></h1>

                  <div className="absolute rotate-90 w-[1px] h-[12px] md:h-9 -left-[16px] md:-left-[38px] top-[50%] md:top-[35%] bg-white"></div>
                  <h1 className="absolute text-[10px] leading-4 md:text-base md:leading-5 w-[60px] top-[49%] md:top-[39%] -left-[84px] md:-left-[98px] text-white"><b>Cost</b></h1>

                  <h1 className="absolute family-hatton font-semibold text-[16px] leading-5 md:text-xl md:leading-[25px] -bottom-[27px] md:-bottom-[50px] left-[5px] md:left-[33%] text-white">volant</h1>
                </div>
                <div className="place-self-start relative md:ml-[11%]">
                  <img src={imgright} alt="" className="hidden md:block col-start-3 md:mr-[0px]"/>
                  <img src={imgrightmob} alt="" className="md:hidden"/>
                  <div className="absolute rotate-90 w-[1px] h-[12px] md:h-9 -right-[16px] md:-right-[40px] top-[0px] md:-top-[16px] bg-white"></div>
                  <h1 className="absolute text-[10px] leading-4 md:text-base md:leading-5 w-[60px] md:w-auto -top-[10px] md:-top-[9px] -right-[88px] md:-right-[188px] text-white"><b>What you pay</b></h1>

                  <div className="absolute rotate-90 w-[1px] h-[12px] md:h-9 -right-[16px] md:-right-[40px] top-[30%] md:top-[22%] bg-white"></div>
                  <h1 className="absolute text-[10px] leading-4 md:text-base md:leading-5 w-[60px] md:w-auto top-[24%] md:top-[25%] -right-[88px] md:-right-[224px] text-white"><b>Wholesale markup</b></h1>

                  <div className="absolute rotate-90 w-[1px] h-[12px] md:h-9 -right-[16px] md:-right-[40px] top-[67%] md:top-[58%] bg-white"></div>
                  <h1 className="absolute text-[10px] leading-4 md:text-base md:leading-5 w-[60px] top-[67%] md:top-[61%] -right-[88px] md:-right-[140px] text-white"><b>Cost</b></h1>

                  <h1 className="absolute md:hidden family-hatton font-semibold text-[16px] leading-5 w-[100px] -bottom-[47px] left-[5px] text-white">traditional companies</h1>
                  <h1 className="absolute hidden md:block family-hatton font-semibold md:leading-[25px] w-[100px] md:-bottom-[70px] md:left-[23%] text-white">Traditional companies</h1>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default WeControl;