import React from "react";
import img from "./tableimg.png";
import close from "./close.png";
import diffuser from "./whiteDifuser.png";
import diffusermob from "./whiteDifuser.png";
import candle from "./candle.png";
import reed from "./reed.png";
import tik from "./tik.png";

const CompareTable = () => {
  return (
    <div>
      <div className="pl-4 pr-2 md:w-9/12 mx-auto md:mt-[100px] mb-3">
      
        <div className="md:hidden mb-[135px]">
          <div className="text-center">
          <h1 className="family-hatton text-[22px] leading-[27px] my-4">Why use a volant diffuser?</h1>
            <p className="mx-auto text-base leading-5 max-w-[346px] mb-5">
            The volant diffuser helps you bring nature's richest benefits into your home, office or anywhere else. If you're yearning for more energy, sleep, focus or relaxation, volant's diffuser and essential oils are the answer.
            </p>
            <a
              href="#getOfferNOw"
              style={{ backgroundColor: "#DEAB5B" }}
              className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 px-12 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22px] mt-4"
            >
              Get 50% off
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="h-[55px] flex px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              
            </div>
            <div className="w-2/3 flex justify-between">
              <div className="relative w-full flex justify-around">
                <img src={diffuser} className="absolute bottom-2 -top-[90px] h-auto w-[144px] hidden md:block"/>
                <img src={diffusermob} className="absolute bottom-2 w-[80px] scale-125 md:hidden"/>
              </div>
              <div className="relative w-full flex justify-around">
                <img src={candle} className="absolute bottom-2 md:-top-[48px] w-[35px] md:w-[51px] h-[61px] md:h-[90px]"/>
              </div>
              <div className="relative w-full flex justify-around">
                <img src={reed} className="absolute bottom-2 md:-top-20 w-[55px] md:w-[70px] h-[90px] md:h-[126px]"/>  
              </div>
              
            </div>
          </div>
          

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              
            </div>
            <div className="w-2/3 flex justify-around text-center">
              <h1 className="family-hatton text-sm leading-[17px] md:text-lg md:leading-[22px]">Volant Diffuser</h1>
              <h1 className="family-hatton text-sm leading-[17px] md:text-lg md:leading-[22px]">Scented candle</h1>
              <h1 className="family-hatton text-sm leading-[17px] md:text-lg md:leading-[22px]">Reed diffuser</h1>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Scents your home</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={tik} width="30"className="h-[30px]"/>
              <img src={tik} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">No nasty chemicals</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Safe around kids & pets</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Cost effective</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Better sleep</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Quiet in use</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={tik} width="30"className="h-[30px]"/>
              <img src={tik} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Environmentally friendly</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Safe at night</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={tik} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Awarded best wellness product 2022</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]">
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">Cosy light</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={tik} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

          <div className="h-[55px] flex items-center px-3.5 md:px-8 rounded-[10px]" style={{ 'backgroundColor': 'rgba(255, 238, 223, 0.5)' }}>
            <div className="w-1/3">
              <h1 className="text-sm leading-[17px] md:text-lg md:leading-[25px]">90-day satisfaction guarantee</h1>
            </div>
            <div className="w-2/3 flex justify-around">
              <img src={tik} width="30" className="h-[30px]"/>
              <img src={close} width="30"className="h-[30px]"/>
              <img src={close} width="30" className="h-[30px]"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompareTable;