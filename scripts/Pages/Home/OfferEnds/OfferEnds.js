import React from "react";
import { useTimer } from 'react-timer-hook';
import img from './countdown.jpg';
import './offerends.css';


function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div>
      <div className="flex justify-between w-80 mx-auto md:w-auto mb-[52px] md:mb-0">
        <div>
          <h1 className="text-[40px] leading-[50px] md:text-[70px] md:leading-[88px] family-hatton">{ hours }</h1>
          <p className="text-[22px] leading-7 md:text-xl">Hours</p>
        </div>
        <div>
          <h1 className="text-[40px] leading-[50px] md:text-[70px] md:leading-[88px] family-hatton">{ minutes }</h1>
          <p className="text-[22px] leading-7 md:text-xl">Minutes</p>
        </div>
        <div>
          <h1 className="text-[40px] leading-[50px] md:text-[70px] md:leading-[88px] family-hatton">{ seconds }</h1>
          <p className="text-[22px] leading-7 md:text-xl">Seconds</p>
        </div>
      </div>
    </div>
  );
}

const OfferEnds = () => {

  const time = new Date();
  time.setHours(time.getHours() + 7);
  time.setMinutes(time.getMinutes() + 25);
  time.setSeconds(time.getSeconds() + 13);
  

  return (
    <div style={{ background: "#FFEEDF80" }} className="mt-16 md:my-20">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 md:py-[70px] md:gap-32 ">
          <div className="relative w-max md:w-auto ml-[13px] md:mx-auto offer_ends_review_div">
            <img src={img} alt="" className="md:mx-auto w-[250px] h-[284px] md:w-[352px] md:h-[401px]"/>
            <div className="bg-white offer_ends_review absolute top-6 md:top-14 w-[211px] left-[186px] md:w-[350px] md:left-[283px] p-[10px] md:p-5 rounded-[10px]">
              <p className="text-xs md:text-base md:leading-5 text-center w-[185px] md:w-auto italic">
              “The scents from Volant and the diffuser has made such a difference! I have tried scented candles, scented sticks, incense room spray and burning oil to fragrance my home but they either last too short or feel unhealthy in the long run. The natural oils from Volant smell amazing and fill your home with fragrance without unhealthy residue from burning. I recommend it to everyone I know!”
              </p>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 20 20"
                  fill="#DEAB5B"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 20 20"
                  fill="#DEAB5B"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 "
                  viewBox="0 0 20 20"
                  fill="#DEAB5B"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 "
                  viewBox="0 0 20 20"
                  fill="#DEAB5B"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5 "
                  viewBox="0 0 20 20"
                  fill="#DEAB5B"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h1 className="text-sm leading-[17.57px] font-bold">Weronica Andersson</h1>
              <span className="">(<a href="https://www.trustpilot.com/reviews/6232ef0f4842703252b1b548" target="_blank" className="underline text-sky-300 text-xs leading-[15px]">21.02.2022 on Trustpilot</a>)</span>
            </div>

          </div>
          <div className="flex flex-col mx-auto text-center max-w-[410px] md:max-w-none">
            <h1 className="family-hatton font-semibold mt-16 mb-14 text-2xl md:mt-0 md:mb-[69px] md:text-[32px] md:leading-10">The offer ends in</h1>
            <MyTimer expiryTimestamp={time} />
            <a
                href="#getOfferNOw"
                style={{ backgroundColor: "#DEAB5B" }}
                className="items-center block px-12 py-2 mx-auto mt-4 text-lg leading-[22px] md:text-2xl text-white bg-yellow-600 border-0 rounded md:py-3 md:px-24 focus:outline-none hover:bg-gray-200 md:mt-8"
                >
                Get 50% off
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferEnds;
