import React, {useState} from "react";
import ReactPlayer from 'react-player';
import "./bestQuality.css";
import imgright from "./BestQuality.png";
import videosrc from "./handmade-diffuser.mp4";

const BestQuality = () => {

  const [playings, setPlaying] = useState(false);

  const handleOnReady = () => setTimeout(() => {
  setPlaying(true)
  console.log(playings); 
}, 3000);

  return (
    <div>
      <div className="px-8 md:px-0 md:w-9/12 mx-auto mt-[94px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-16 mt-[74px]">
          
            
            <div className="flex flex-col self-center order-2 md:order-1">
              <h1 className="hidden md:block family-hatton text-[22px] leading-[27px] md:text-[32px] md:leading-[40px] my-4 text-center">at the best possible quality.</h1>
              <p className="mx-auto text-center max-w-[332px] md:max-w-[542px] text-base leading-5 md:text-[22px] md:leading-7">
              Our premium diffusers are handmade, so every piece has its unique characteristics. They are crafted with 5 mm wall thickness and painted with sustainable and resistant colour.
              </p>
              <a
                  href="#getOfferNOw"
                  style={{ backgroundColor: "#DEAB5B" }}
                  className="block mx-auto text-center w-max items-center bg-yellow-600 border-0 py-2 md:py-3 px-12 md:px-24 focus:outline-none hover:bg-gray-200 rounded text-white text-lg leading-[22px] md:text-2xl mt-6 md:mt-8"
                  >
                  Get 50% off
              </a>
            </div>
            <div className="order-1 md:order-2">
              <h1 className="md:hidden family-hatton text-[22px] leading-[27px] md:text-[32px] md:leading-[40px] my-4 text-center">at the best possible quality.</h1>
              <div className="max-w-[677px] best_quality_video">
              <ReactPlayer playsinline width={677} height={380} url={videosrc} loop={true} playing={playings} onReady={() => handleOnReady} config={{ file: { attributes: {
    autoPlay: true,
    muted: true
  }}}} />
              </div>
              
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default BestQuality;