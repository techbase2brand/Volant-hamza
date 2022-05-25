import React, {Fragment, useEffect} from "react";
import letter3 from "./letter3.jpg";
import letter1 from "./letter1.jpg";
import letter2 from "./letter2.jpg";
import letter4 from "./letter4.jpg";
import letter3mob from "./slider1.webp";
import letter2mob from "./slider2.webp";
import letter1mob from "./slider3.webp";
import letter4mob from "./letter4mob.webp";
import Glide from '@glidejs/glide';
import useScreenType from "react-screentype-hook";

import "./styles.scss";
import "./custom.css";

const Letter = () => {
  const screenType = useScreenType();
  // const slider = new Glide(".glide", {
  //   perView: 1,
  //   autoplay: 2000,
  //   type: "carousel"
  // })
  useEffect(() => {
    const slider = new Glide(".glide", {
      perView: 1,
      autoplay: false,
      type: "carousel"
    }).mount();
    // console.log(slider);
  }, []);
  return (
    <div>
      <div style={{ background: "#FFEEDF80" }} className="mt-[76px] pt-[46px] md:mt-[100px] pb-[45px]">
        <div className="px-6 md:px-0 md:w-3/4 mx-auto">
          <h1 className="family-hatton text-[22px] leading-[27px] mb-7 text-center">A letter from Angela</h1>
          <div className="glide flex items-center">
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow  custom-arrow glide__arrow--left" data-glide-dir="<">
                
              </button>
            </div>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                
              <li className="glide__slide h-auto" >
                  <div className="slide_bg_custom" style={{backgroundImage: `url(${screenType.isMobile ? letter3mob : letter3})` }}>
                    <div className="glide-container">
                      <div className="md:hidden">
                        <img src={letter3mob} className="" />
                      </div>
                      <div className="text-center px-2 md:px-0 md:w-[400px] bg-[#bcb19c] py-1">
                        <h3 className="text-2xl px-5 pt-5 mb-4">
                          <span className="text-2xl text-[#faf5fa] font-bold">"My home is my happy place and tells a story of who I am"</span>
                        </h3>
                        <p className="text-lg mb-5 text-white">
                          <span className="mr-0">Angela Stark (<span style={{color: 'rgb(255, 255, 255)'}}>@tasselsandfringes</span>)<br/>Interior designer</span>
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide h-auto"  >
                  <div className="slide_bg_custom" style={{backgroundImage: `url(${screenType.isMobile ? letter1mob : letter1})` }}>
                    <div className="glide-container">
                      <div className="md:hidden">
                        <img src={letter1mob} className="" />
                      </div>
                      <div className="text-center px-2 md:px-0 md:w-[400px] bg-[#bcb19c] py-1">
                        <h3 className="text-2xl px-5 pt-5 mb-4">
                          <span className="text-2xl text-[#faf5fa] font-bold">"The Volant Diffuser is a piece of art and a part of my minimalist interior"</span>
                        </h3>
                        {/* <p className="text-lg mb-5 text-white">
                          <span className="mr-0">Angela Stark (<span style={{color: 'rgb(255, 255, 255)'}}>@tasselsandfringes</span>)<br/>Interior designer</span>
                        </p> */}
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide h-auto" >
                  <div className="slide_bg_custom" style={{backgroundImage: `url(${screenType.isMobile ? letter3mob : letter4})` }}>
                    <div className="glide-container">
                      <div className="md:hidden">
                        <img src={letter4mob} className="" />
                      </div>
                      <div className="text-center px-2 md:px-0 md:w-[400px] bg-[#bcb19c] py-1">
                        <h3 className="text-2xl px-5 pt-5 mb-4">
                          <span className="text-2xl text-[#faf5fa] font-bold">"I use it every day and the scents remind me of my childhood in south of Germany"</span>
                        </h3>
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide h-auto" >
                  <div className="slide_bg_custom" style={{backgroundImage: `url(${screenType.isMobile ? letter2mob : letter2})` }}>
                    <div className="glide-container">
                      <div className="md:hidden">
                        <img src={letter2mob} className="" />
                      </div>
                      <div className="text-center px-2 md:px-0 md:w-[400px] bg-[#bcb19c] py-1">
                        <h3 className="text-2xl px-5 pt-5 mb-4">
                          <span className="text-2xl text-[#faf5fa] font-bold">"It's like the handmade ceramic stone cover is made for interior obsessed women like me"</span>
                        </h3>
                        {/* <p className="text-lg mb-5 text-white">
                          <span className="mr-0">Angela Stark (<span style={{color: 'rgb(255, 255, 255)'}}>@tasselsandfringes</span>)<br/>Interior designer</span>
                        </p>
                         */}
                      </div>
                    </div>
                  </div>
                </li>
              

                
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow custom-arrow glide__arrow--right" data-glide-dir=">">
                
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Letter;
