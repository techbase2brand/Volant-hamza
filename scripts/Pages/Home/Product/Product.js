import React, {useState, useEffect} from "react";
import { useTimer } from 'react-timer-hook';
import { Carousel } from "react-carousel-minimal";
import dateFormat, { masks } from "dateformat";
import paid from "./duty_paid.svg";
import energy from "./energy.png";
import sleep from "./sleep.png";
import spa from "./spa.png";
import relax from "./relax.png";
import lavender from "./lavender.png";
import guarantee from "./guarantee.svg";
import truck from "./transport.svg";
import "./Product.css";
import secure from "./secure_payment.svg";
import tik from "./tik.svg";
import chat from "./conversation.png";
import bag from './Background.svg';
import book from './AnEssentialLife1.svg';
import dr1 from './dr1.svg';

import e1 from "./Energy/e3.svg"
import e2 from "./Energy/e2.svg"
import e3 from "./Energy/e1.svg"
import e4 from "./Energy/e4.svg"

import s1 from "./Sleep/s1.svg"
import s2 from "./Sleep/s2.svg"
import s3 from "./Sleep/s3.svg"
import s4 from "./Sleep/s4.svg"

import r1 from "./Relax/r1.svg"
import r2 from "./Relax/r2.svg"
import r3 from "./Relax/r3.svg"
import r4 from "./Relax/r4.svg"

import sp1 from "./Spa/sp1.svg"
import sp2 from "./Spa/sp2.svg"
import sp3 from "./Spa/sp3.svg"

import l1 from "./Lavender/l1.svg"
import l2 from "./Lavender/l2.svg"
import l3 from "./Lavender/l3.svg"
import L4 from "./Lavender/image 92.svg"

import whiteDifuser from "./White/whiteDifuserimg.png";
import whiteSlider1 from "./White/Slider1.jpg";
import whiteSlider2 from "./White/Slider2.jpg";
import whiteSlider3 from "./White/Slider3.jpg";
import whiteSlider4 from "./White/Slider4.jpg";
import whiteSlider5 from "./White/Slider5.jpg";
import whiteSlider6 from "./White/Slider6.jpg";
// import whiteSlider7 from "./White/Slider7.png";

import blackDifuser from "./Black/BlackDiffuserimg.png";
import blackSlider1 from "./Black/Slider1.jpg";
import blackSlider2 from "./Black/Slider2.jpg";
import blackSlider3 from "./Black/Slider3.jpg";
import blackSlider4 from "./Black/Slider4.jpg";
import blackSlider5 from "./Black/Slider5.jpg";
import blackSlider6 from "./Black/Slider6.jpg";
// import blackSlider7 from "./Black/Slider7.png";

import greyDifuser from "./Grey/GreyVolantDiffuserimg.png";
import greySlider1 from "./Grey/Slider1.jpg";
import greySlider2 from "./Grey/Slider2.jpg";
import greySlider3 from "./Grey/Slider3.jpg";
import greySlider4 from "./Grey/Slider4.jpg";
import greySlider5 from "./Grey/Slider5.jpg";
import greySlider6 from "./Grey/Slider6.jpg";
// import greySlider7 from "./Grey/Slider7.png";

import clayDifuser from "./Clay/ClayVolantDiffuserimg.png";
import claySlider1 from "./Clay/Slider1.jpg";
import claySlider2 from "./Clay/Slider2.jpg";
import claySlider3 from "./Clay/Slider3.jpg";
import claySlider4 from "./Clay/Slider4.jpg";
import claySlider5 from "./Clay/Slider5.jpg";
import claySlider6 from "./Clay/Slider6.jpg";
// import claySlider7 from "./Clay/Slider7.png";

import amex from "./paymentMethods/amex.svg";
import visa from "./paymentMethods/visa.svg";
import master from "./paymentMethods/master.svg";
import bancontact from "./paymentMethods/bancontact.svg";
import paypal from "./paymentMethods/paypal.svg";
import ideal from "./paymentMethods/ideal.svg";
import klarna from "./paymentMethods/klarna.svg";
import applepay from "./paymentMethods/applepay.svg";



const Product = () => {
   
  
    
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
  } = useTimer({ onExpire: () => console.warn('onExpire called'), autoStart: false });
 

  const [colors , setColors] = useState({
    white:false,
    black:false,
    grey:false,
    clay:false
  })

  const [price,setPrice] = useState(69.5)
  const [compare,setCompare] = useState(139)
  const [extra,setExtra] = useState(39)
  const [overlay, setOverlay] = useState('');
  const [opacity, setOpacity] = useState('opacity-50');
  const [btnDisable, setBtnDisable] = useState('');
  const [load,setLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const now = new Date();

  // Basic usage
  const datenow = dateFormat(now, "dd.mm.yyyy");

  // console.log(datenow);

  useEffect(() => {
    if(!load){
      fetch('/cart/clear.js', {
        method: 'POST'
      })
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    setLoad(true)
  } , [load])


  const [variant , setVariants] = useState({
    energy:{cart:false , qty:0 , id:37675526258846, price:20 , compare:25},
    sleep:{cart:false , qty:0 , id:37675524653214, price:20 , compare:25},
    relax:{cart:false , qty:0 , id:37675525374110, price:16 , compare:20},
    spa:{cart:false , qty:0 , id:37675515347102, price:20 , compare:25},
    ebook:{cart:true , qty:1 , id:37765547491486, price:39 , compare:39},
  })

  const [disabled,setDisabled] = useState(true)

  async function addToCart(items){
    // console.log("add to cart")
    let IsError = false
    Object.keys(colors).map((x) => {
      if(colors[x] === false && IsError === false){
        IsError = true
      } 
    })
    if(IsError){
      setErrorMessage("You must select a colour and add three oils");
      return true;
    } else {
      setErrorMessage("");
    }

    let count = 0
    let qcount = 0
    for(let i of Object.values(variant)){
      if(i.cart) count++
      qcount += i.qty
    }
    console.log(qcount)
    console.log(count)

    if(qcount < 4) {
      setErrorMessage("You must add three oils");
      return false;
    }

    let id = 41613287981214;

    if(colors.white) id = 41613287981214
    if(colors.black) id = 41607556432030
    if(colors.grey) id = 41607556497566
    if(colors.clay) id = 41607556464798

    let product = [{
      'id': id,
      'quantity': 1
    }];
    setBtnDisable('pointer-events-none')
    let formData = {
      'items': product
     };
     fetch('/cart/add.js', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     .then(response => {
      //  console.log(response);
       addToCartAddon()
       return response.json();
     })
     .catch((error) => {
       console.error('Error:', error);
     });
  }

  async function addToCartAddon(){
    console.log(opacity)
    let product = [];

    for(let item of Object.values(variant))
    {
      if(item.cart)
      {
        product.push({
          'id': item.id,
          'quantity': item.qty
        })
      }
    }

    console.log(product)
    
    if(product.length > 0)
    {
    let formData = {
      'items': product
     };
     fetch('/cart/add.js', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     .then(response => {
       console.log(response);
       window.location.href = '/checkout';
       return response.json();
     })
     .catch((error) => {
       console.error('Error:', error);
     });
    }else{
      window.location.href = '/checkout';
    }
  }

  async function clearCart(){

  }

  function setVariant(item){
    setVariants({
      ...variant,
      [item.name]:{
        ...variant[item.name],
        cart:true,
        qty:item.qty
      }
    })
    setCompare(compare+variant[item.name].compare)
    setPrice(price+variant[item.name].price)    
    checkBtn()
  }

  function checkBtn(){
    let count = 0
    let qcount = 0
    for(let i of Object.values(variant)){
      if(i.cart) count++
      qcount += i.qty
    }
    
    // console.log(count)
    if(count > 3 || qcount >= 4) {
      setDisabled(false)
      setOpacity('') 
      const time = new Date();
      time.setMinutes(time.getMinutes() + 10);
    time.setSeconds(time.getSeconds());
    document.getElementById("demo").style.display = "none";

    if(!isRunning){
      restart(time)
    }
    
      // setExtra(39)
    }
    else {
      setDisabled(true)
      setOpacity('opacity-50') 
      // setExtra(0)
    }
  }

  useEffect(() => {
    checkBtn()
  })
const formatTime = (time) => {
  return String(time).padStart(2, "0");
};
  function handleQty(item){
    if(variant[item.name].qty > 0 && item.mode === 'add'){
      setVariants({
        ...variant,
        [item.name]:{
          ...variant[item.name],
          cart:true,
          qty:(variant[item.name].qty + 1)
        }
      })

      console.log(variant[item.name].price)
      console.log(variant[item.name].compare)
      console.log(compare)
      console.log(price)
      setCompare(compare+variant[item.name].compare)
      setPrice(price+variant[item.name].price)
    }
    else if(variant[item.name].qty > 1 && item.mode === 'sub'){
      setVariants({
        ...variant,
        [item.name]:{
          ...variant[item.name],
          cart:true,
          qty:(variant[item.name].qty - 1)
        }
      })

      setCompare(compare - variant[item.name].compare)
      setPrice(price - variant[item.name].price)
    }
    else{
      setVariants({
        ...variant,
        [item.name]:{
          ...variant[item.name],
          cart:false,
          qty:0
        }
      })

      setCompare(compare - variant[item.name].compare)
      setPrice(price - variant[item.name].price)
    }
    checkBtn()
  }

  function setColor(color){
    setColors({
      white:false,
      black:false,
      grey:false,
      clay:false
    })
    setColors({
      [color]:true
    })

    if(color == "white") setProductImages(whiteData)
    if(color == "black") setProductImages(blackData)
    if(color == "grey")  setProductImages(greyData)
    if(color == "clay")  setProductImages(clayData)
    
    setOverlay('hidden');
    document.getElementById("thumbnail-0").click()
  }

  // if screen size is 768px 0r less then show mobile view
  const [carouselAP,setCarouselAP] = useState(true)
  
  const whiteData = [
    {
      image: whiteDifuser,
      caption: `-50%`,
    },
    {
      image: whiteSlider1,
      caption: "-50%",
    },
    {
      image: whiteSlider2,
      caption: "-50%",
    },
    {
      image:  whiteSlider3,
      caption: "-50%",
    },
    {
      image: whiteSlider4,
      caption: "-50%",
    },
    {
      image: whiteSlider5,
      caption: "-50%",
    },
    {
      image: whiteSlider6,
      caption: "-50%",
    }
  ];
  
  const blackData = [
    {
      image: blackDifuser,
      caption: `-50%`,
    },
    {
      image: blackSlider1,
      caption: "-50%",
    },
    {
      image: blackSlider2,
      caption: "-50%",
    },
    {
      image: blackSlider3,
      caption: "-50%",
    },
    {
      image: blackSlider4,
      caption: "-50%",
    },
    {
      image: blackSlider5,
      caption: "-50%",
    },
    {
      image: blackSlider6,
      caption: "-50%",
    }
  ];

  const greyData = [
    {
      image: greyDifuser,
      caption: `-50%`,
    },
    {
      image: greySlider1,
      caption: "-50%",
    },
    {
      image: greySlider2,
      caption: "-50%",
    },
    {
      image: greySlider3,
      caption: "-50%",
    },
    {
      image: greySlider4,
      caption: "-50%",
    },
    {
      image: greySlider5,
      caption: "-50%",
    },
    {
      image: greySlider6,
      caption: "-50%",
    }
  ];

  const clayData = [
    {
      image: clayDifuser,
      caption: `-50%`,
    },
    {
      image: claySlider1,
      caption: "-50%",
    },
    {
      image: claySlider2,
      caption: "-55%",
    },
    {
      image: claySlider3,
      caption: "-50%",
    },
    {
      image: claySlider4,
      caption: "-50%",
    },
    {
      image: claySlider5,
      caption: "-50%",
    },
    {
      image: claySlider6,
      caption: "-50%",
    }
  ];

  const [productImages , setProductImages] = useState(whiteData)

  sessionStorage.setItem('save50' , 1)

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const discount = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="w-11/12 mx-auto" id="productSection">
        <div className="grid grid-cols-1 pt-12 mb-12 md:grid-cols-2">
          <div className="">
            <div className="pb-4 md:pb-[65px]" style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "0 20px",
                }}
                className="relative"
              >
                <Carousel
                  data={productImages}
                  time={5000}
                  width="700px"
                  height="600px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={false}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="top"
                  automatic={false}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="78px"
                  style={{
                    textAlign: "center",
                    maxWidth: "700px",
                    maxHeight: "600px",
                    margin: "0px auto",
                  }}
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid w-11/12 grid-cols-2 mx-auto md:grid-cols-4 md:px-12">
                <div className="w-[108px] mx-auto text-center">
                  <img src={truck} alt="" className="mx-auto w-[60px] h-[60px]"/>
                  <p className="mt-2">Free express shipping and returns</p>
                </div>
                <div className="w-[108px] mx-auto text-center">
                  <img src={paid} alt="" className="mx-auto w-[60px] h-[60px]"/>
                  <p className="mt-2">All duties and fees paid</p>
                </div>
                <div className="w-[108px] mx-auto text-center">
                  <img src={guarantee} alt="" className="mx-auto w-[60px] h-[60px]"/>
                  <p className="mt-2">10-year warranty</p>
                </div>
                <div className="w-[108px] mx-auto text-center">
                  <img src={secure} alt="" className="mx-auto w-[60px] h-[60px]"/>
                  <p className="mt-2">Secure and encrypted payments</p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <img src={chat} className="w-[50px] mr-3 h-[50px]"/>
                <p className="w-[250px] text-xs">
                  Have questions about buying a diffuser?
                  Reach out to <b>support@volantaroma.com</b>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 max-w-[633px] md:w-[633px] md:mt-0 md:ml-auto">
            <div className="flex justify-between">
              <div className="">
                <h1 className="font-normal headline text-base leading-5 md:text-[27px] md:leading-[34px] w-custom">The Volant Diffuser</h1>
              </div>
              <div className="text-base leading-5 md:text-[22px] md:leading-7 price-custom">
                <h1><span style={{ color: "#DEAB5B" }}>69.5€</span> <span className="line-through text-[#6f6f6f]">139€</span></h1>
              </div>
              <div className="md:mt-0 mt-3.5 flex flex-col items-center md:justify-end w-[125px] md:w-auto">
                <div className="flex items-center px-0 md:px-4 mb-2 -mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px] md:w-4 md:h-4"
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px] md:w-4 md:h-4"
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px] md:w-4 md:h-4"
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px] md:w-4 md:h-4"
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px] md:w-4 md:h-4"
                    viewBox="0 0 20 20"
                    fill="#DEAB5B"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {/* Quantity */}
                  <p style={{ color: "#6F6F6F" }} className="ml-1 text-xs leading-[15px] md:text-sm md:leading-4">
                    <span>(7,321)</span>
                  </p>
                </div>
                <button
                  style={{ background: "#DEAB5B" }}
                  className="text-sm leading-[17px] md:text-base md:leading-5 w-full md:w-[136px] py-1 text-white rounded-full"
                >
                  100,000 sold
                </button>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <p className="text-xs w-auto md:w-auto md:text-base italic md:leading-5">
                “Fills the house with a gorgeous, fresh scent. Perfect for when
                I need some relaxing time to myself or when I have guests over
                and want my home to smell pleasant. I enjoyed it so much, I had
                to order a second one!” <span className="not-italic">- Elisabeth J.</span>
              </p>
            </div>
            {/* Pick Color */}
            <div className="">
              <p className="mb-2 text-xs md:text-base md:leading-5">1. Pick color</p>
              <div className="grid grid-cols-4 rounded-[10px] mb-9 md:mb-5">
                <button
                  className={colors.white ? 'color-active flex items-center justify-around py-3 border border-[#DEAB5B] rounded-l-[10px]' : 'flex items-center justify-around py-3 border rounded-l-[10px]' }
                  onClick={()=> setColor('white')}
                >
                  <h1 className="text-xs md:text-base md:leading-5">White</h1>
                  <span className="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      className="block w-4 h-4 md:w-6 md:h-6 bg-white border rounded-full"
                    ></a>
                  </span>
                </button>
                <button className={colors.black ? 'color-active flex items-center justify-around py-2 border border-[#DEAB5B]' : 'flex items-center justify-around py-2 border'} onClick={()=> setColor('black')}>
                  <h1 className="text-xs md:text-base md:leading-5">Black</h1>
                  <span className="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      className="block w-4 h-4 md:w-6 md:h-6 bg-black rounded-full"
                    ></a>
                  </span>
                </button>
                <button className={colors.grey ? 'color-active flex items-center justify-around py-2 border border-[#DEAB5B]' : 'flex items-center justify-around py-2 border'} onClick={()=>setColor('grey')}>
                  <h1 className="text-xs md:text-base md:leading-5">Grey</h1>
                  <span className="block rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      className="block w-4 h-4 md:w-6 md:h-6 bg-gray-400 rounded-full"
                    ></a>
                  </span>
                </button>
                <button className={colors.clay ? 'color-active flex items-center justify-around py-2 border border-[#DEAB5B] rounded-r-[10px]' : 'flex items-center justify-around py-2 border rounded-r-[10px]'} onClick={()=>setColor('clay')}>
                  <h1 className="text-xs md:text-base md:leading-5">Clay</h1>
                  <span className="block rounded-full transition ease-in duration-300">
                    <a
                      style={{ background: "#D28C03" }}
                      href="#red"
                      className="block w-4 h-4 md:w-6 md:h-6 rounded-full"
                    ></a>
                  </span>
                </button>
              </div>
            </div>
            <div className="relative">
              <p className="mb-2 text-xs md:text-base md:leading-5 md:block">2. Pick three or more 100% pure scents</p>

              <div className="relative grid grid-cols-1 rounded-lg md:grid-cols-1" style={{ 'backgroundColor': 'rgba(196, 196, 196, 0.2)' }}>
                <div className="bg-lightbrown absolute right-[18px] -top-6 text-xs px-4 py-1 rounded-t">Top rated</div>
                <div className="flex justify-between">
                  <div className="flex px-1.5 md:px-4">
                    <div className="pt-[11px] pb-[7px]">
                      <img className="mr-4 rounded-full h-[41px] w-[41px]" src={energy} alt="" />
                    </div>
                    <div className="pt-[6px]">
                      <h1 className="hidden md:block text-[15px] leading-[19px] font-bold">Energy Blend (15 ml)</h1>

                      <div className="flex justify-between md:hidden">
                        <h1 className="text-[13px] leading-[19px] font-bold">Energy Blend</h1>
                        
                        <div className="ml-3">
                          <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                            <strike>25 €</strike>{" "}
                            <span style={{ color: "#DEAB5B" }}>20 €</span>
                          </h1>
                        </div>
                      </div>

                      <h4 className="text-xs leading-4">250 hours of aroma</h4>
                    </div>
                  </div>
                  <div className="flex items-center pr-[11px] md:pr-4">
                    <div className="flex items-center justify-between md:justify-end w-full h-full">
                      <div className="hidden md:block mr-2 md:mr-4">
                        <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                          <strike>25 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>20 €</span>
                        </h1>
                      </div>
                      
                      {!variant.energy.cart &&
                      <> 
                        <div className="flex items-center">
                        <button className="md:mr-2 bg-[#DEAB5B] px-4 py-1 rounded-md" onClick={ () => setVariant({name:'energy',qty:1})}>
                          <span className="flex items-center text-[17px] leading-[21px] md:text-base text-white" >
                            <img src={ bag } className="mr-2 w-[15px]" alt="bagpng"/>
                            Add
                          </span>
                        </button>
                        </div>
                      </>
                      }
                      {variant.energy.cart &&
                      <>
                        <div className="hidden md:flex items-center mr-3">
                        <h1 className="text-lightbrown">Added</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7"
                          viewBox="0 0 20 20"
                          fill="rgba(222, 171, 91, 0.5)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        </div>
                        <div className="flex items-center">
                        <button className="px-1 py-1 mr-1 md:mr-2 bg-white rounded" onClick={()=> handleQty({name:'energy',mode:'sub'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button className="px-2 mr-1 md:mr-2 bg-white rounded-lg">
                          {variant.energy.qty}
                        </button>
                        <button className="px-1 py-1 bg-white rounded" onClick={()=> handleQty({name:'energy',mode:'add'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        </div>
                      </>
                      }
                    </div>
                  </div>
                </div>
                <details className="w-full pb-1 pl-12 pr-3">
                      <summary className="ml-[16px] md:ml-[26px] -mt-[19px] text-xs font-bold cursor-pointer custom-marker">Info<i className="arrow"></i></summary>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-3 mb-4">
                        
                      <div className="absolute w-1 h-full border-l border-black -left-3"></div>
                        <div className="max-w-[300px] md:max-w-full">
                          <p className="mb-2 text-xs italic">
                          “Fantastic energy fills my home. I absolutely love this smell. It is fresh and citrus and I love sharing it with my family, and my friends when they come visit” - Reshee P.
                          </p>
                          <h1 className="text-xs font-bold">
                            Best use cases for Energy:
                          </h1>
                          <ul className="px-2 ml-2 text-xs list-disc">
                            <li>
                            In the morning while preparing for your day and brewing your morning coffee
                            </li>
                            <li>
                            To create an uplifting, energetic atmosphere
                            </li>
                            <li>
                            Massage into your skin for an instant energy boost
                            </li>
                          </ul>
                        </div>
                        <div className="hidden md:block ml-2">
                          <h1 className="text-xs font-bold mb-2.5 ml-3">Ingredients:</h1>
                          <div className="grid grid-cols-2">
                            <div className="flex mb-5 items-center">
                              <img src={e1} alt="" className="w-[53px]"/>
                              <h1 className="text-xs w-[72px]">Grapefruit Energising</h1>
                            </div>
                            <div className="flex mb-5 items-center">
                              <img src={e2} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Bergamot Invigorating</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={e3} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Lime <br/>Bright</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={e4} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Amyris Refreshing</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                </details>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 mt-[25px] rounded-lg" style={{ 'backgroundColor': 'rgba(196, 196, 196, 0.2)' }}>
                <div className="flex justify-between">  
                  <div className="flex px-1.5 md:px-4 ">
                    <div className="pt-[11px] pb-[7px]">
                      <img className="mr-4 rounded-full h-[41px] w-[41px]" src={sleep} alt="" />
                    </div>
                    <div className="pt-[6px]">
                      <h1 className="hidden md:block text-[15px] leading-[19px] font-bold">Sleep Blend (15 ml)</h1>
                      
                      <div className="flex justify-between md:hidden">
                        <h1 className="text-[13px] leading-[19px] font-bold">Sleep Blend</h1>
                        
                        <div className="ml-3">
                          <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                            <strike>25 €</strike>{" "}
                            <span style={{ color: "#DEAB5B" }}>20 €</span>
                          </h1>
                        </div>
                      </div>

                      <h4 className="text-xs leading-4">300 hours of aroma</h4>
                    </div>
                  </div>
                  <div className="flex items-center pr-[11px] md:pr-4">
                    <div className="flex items-center justify-between md:justify-end w-full h-full">
                      <div className="hidden md:block mr-2 md:mr-4">
                        <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                          <strike>25 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>20 €</span>
                        </h1>
                      </div>
                      {!variant.sleep.cart &&
                      <> 
                        <div className="flex items-center">
                        <button className="md:mr-2 bg-[#DEAB5B] px-4 py-1 rounded-md" onClick={ () => setVariant({name:'sleep',qty:1})}>
                          <span className="flex items-center text-[17px] leading-[21px] md:text-base text-white" >
                            <img src={ bag } className="mr-2 w-[15px]"/>
                            Add
                          </span>
                        </button>
                        </div>
                      </>
                      }
                      {variant.sleep.cart &&
                      <>
                        <div className="hidden md:flex items-center mr-3">
                          <h1 className="text-lightbrown">Added</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            viewBox="0 0 20 20"
                            fill="rgba(222, 171, 91, 0.5)"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center">
                        <button className="px-1 py-1 mr-1 md:mr-2 bg-white rounded" onClick={()=> handleQty({name:'sleep',mode:'sub'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button className="px-2 mr-1 md:mr-2 bg-white rounded-lg">
                          {variant.sleep.qty}
                        </button>
                        <button className="px-1 py-1 bg-white rounded" onClick={()=> handleQty({name:'sleep',mode:'add'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        </div>
                      </>
                      }
                    </div>
                  </div>
                </div>
                <details className="w-full pb-1 pl-12 pr-3">
                      <summary className="ml-[16px] md:ml-[26px] -mt-[19px] text-xs font-bold cursor-pointer custom-marker">Info<i className="arrow"></i></summary>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-3 mb-4">
                        
                      <div className="absolute w-1 h-full border-l border-black -left-3"></div>
                        <div className="max-w-[300px] md:max-w-full">
                          <p className="mb-2 text-xs italic">
                          “If you have trouble falling asleep this oil is amazing. I feel calmer in bed and sleep better than ever. Highly recommended. ” - Lea T.
                          </p>
                          <h1 className="text-xs font-bold">
                            Best use cases for Sleep:
                          </h1>
                          <ul className="px-2 ml-2 text-xs list-disc">
                            <li>
                            In your bedroom 30 minutes before bedtime to help you wind down
                            </li>
                            <li>
                            On your pillow before bedtime
                            </li>
                            <li>
                            Throughout the night for a good night’s sleep
                            </li>
                          </ul>
                        </div>
                        <div className="hidden md:block ml-2">
                          <h1 className="text-xs font-bold mb-2.5 ml-3">Ingredients:</h1>
                          <div className="grid grid-cols-2">
                            <div className="flex mb-5 items-center">
                              <img src={s1} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Lavender
Light</h1>
                            </div>
                            <div className="flex mb-5 items-center">
                              <img src={s2} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Palma Rosa
Cosy</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={s3} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Frankincense
Relaxing</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={s4} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Chamomile
Sweet</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                </details>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 mt-[25px] rounded-lg relative" style={{ 'backgroundColor': 'rgba(196, 196, 196, 0.2)' }}>
                <div className="bg-lightbrown absolute right-[18px] -top-[22px] text-xs px-4 py-[3px] rounded-t -z-10">Most value</div>
                <div className="flex justify-between">  
                  <div className="flex px-1.5 md:px-4 ">
                    <div className="pt-[11px] pb-[7px]">
                      <img className="mr-4 rounded-full h-[41px] w-[41px]" src={relax} alt="" />
                    </div>
                    <div className="pt-[6px]">
                      <h1 className="hidden md:block text-[15px] leading-[19px] font-bold">Relax Blend (15 ml)</h1>

                      <div className="flex justify-between md:hidden">
                        <h1 className="text-[13px] leading-[19px] font-bold">Relax Blend</h1>
                        
                        <div className="ml-3">
                          <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                            <strike>20 €</strike>{" "}
                            <span style={{ color: "#DEAB5B" }}>16 €</span>
                          </h1>
                        </div>
                      </div>

                      <h4 className="text-xs leading-4">310 hours of aroma</h4>
                    </div>
                  </div>
                  <div className="flex items-center pr-[11px] md:pr-4">
                    <div className="flex items-center justify-between md:justify-end w-full h-full">
                      <div className="hidden md:block mr-2 md:mr-4">
                        <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                          <strike>20 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>16 €</span>
                        </h1>
                      </div>
                      {!variant.relax.cart &&
                      <> 
                        <div className="flex items-center">
                        <button className="md:mr-2 bg-[#DEAB5B] px-4 py-1 rounded-md" onClick={ () => setVariant({name:'relax',qty:1})}>
                          <span className="flex items-center text-[17px] leading-[21px] md:text-base text-white" >
                            <img src={ bag } className="mr-2 w-[15px]"/>
                            Add
                          </span>
                        </button>
                        </div>
                      </>
                      }
                      {variant.relax.cart &&
                      <>
                        <div className="hidden md:flex items-center mr-3">
                        <h1 className="text-lightbrown">Added</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7"
                          viewBox="0 0 20 20"
                          fill="rgba(222, 171, 91, 0.5)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        </div>
                        <div className="flex items-center">
                        <button className="px-1 py-1 mr-1 md:mr-2 bg-white rounded" onClick={()=> handleQty({name:'relax',mode:'sub'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button className="px-2 mr-1 md:mr-2 bg-white rounded-lg">
                          {variant.relax.qty}
                        </button>
                        <button className="px-1 py-1 bg-white rounded" onClick={()=> handleQty({name:'relax',mode:'add'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        </div>
                      </>
                      }
                    </div>
                  </div>
                </div>
                <details className="w-full pb-1 pl-12 pr-3">
                      <summary className="ml-[16px] md:ml-[26px] -mt-[19px] text-xs font-bold cursor-pointer custom-marker">Info<i className="arrow"></i></summary>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-3 mb-4">
                        <div className="max-w-[300px] md:max-w-full">
                          <p className="mb-2 text-xs italic">
                            “Relax has become my absolute favorite in a hectic
                            everyday life! Lovely fragrance that provides a
                            comfortable and relaxing atmosphere in my small
                            house apartment.” - Theres B.
                          </p>
                          <h1 className="text-xs font-bold">
                            Best use cases for Relax:
                          </h1>
                          <ul className="px-2 ml-2 text-xs list-disc">
                            <li>
                              In the living room after a long day when you need
                              to wind down.
                            </li>
                            <li>
                              During challenging moments to redusce stress
                            </li>
                            <li>
                              Before wine and dine with family and friends
                            </li>
                          </ul>
                        </div>
                        <div className="hidden md:block ml-2">
                          <h1 className="text-xs font-bold mb-2.5 ml-3">Ingredients:</h1>
                          <div className="grid grid-cols-2">
                            <div className="flex mb-5 items-center">
                              <img src={r1} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Ylan Ylang Sweeet</h1>
                            </div>
                            <div className="flex mb-5 items-center">
                              <img src={r2} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Palma Rosa Fresh</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={r3} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Eucalyptus Bright</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={r4} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Grapefruit Light</h1>
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-1 h-full border-l border-black -left-3"></div>
                      </div>
                </details>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 mt-[25px] rounded-lg" style={{ 'backgroundColor': 'rgba(196, 196, 196, 0.2)' }}>
                <div className="flex justify-between">  
                  <div className="flex px-1.5 md:px-4 ">
                    <div className="pt-[11px] pb-[7px]">
                      <img className="mr-4 rounded-full h-[41px] w-[41px]" src={spa} alt="" />
                    </div>
                    <div className="pt-[6px]">
                      <h1 className="hidden md:block text-[15px] leading-[19px] font-bold">Spa Blend (15 ml)</h1>

                      <div className="flex justify-between md:hidden">
                        <h1 className="text-[13px] leading-[19px] font-bold">Spa Blend</h1>
                        
                        <div className="ml-3">
                          <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                            <strike>25 €</strike>{" "}
                            <span style={{ color: "#DEAB5B" }}>20 €</span>
                          </h1>
                        </div>
                      </div>

                      <h4 className="text-xs leading-4">280 hours of aroma</h4>
                    </div>
                  </div>
                  <div className="flex items-center pr-[11px] md:pr-4">
                    <div className="flex items-center justify-between md:justify-end w-full h-full">
                      <div className="hidden md:block mr-2 md:mr-4">
                        <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                          <strike>25 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>20 €</span>
                        </h1>
                      </div>
                      {!variant.spa.cart &&
                      <> 
                        <div className="flex items-center">
                        <button className="md:mr-2 bg-[#DEAB5B] px-4 py-1 rounded-md" onClick={ () => setVariant({name:'spa',qty:1})}>
                          <span className="flex items-center text-[17px] leading-[21px] md:text-base text-white" >
                            <img src={ bag } className="mr-2 w-[15px]"/>
                            Add
                          </span>
                        </button>
                        </div>
                      </>
                      }
                      {variant.spa.cart &&
                      <>
                        <div className="hidden md:flex items-center mr-3">
                        <h1 className="text-lightbrown">Added</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7"
                          viewBox="0 0 20 20"
                          fill="rgba(222, 171, 91, 0.5)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        </div>
                        <div className="flex items-center">
                        <button className="px-1 py-1 mr-1 md:mr-2 bg-white rounded" onClick={()=> handleQty({name:'spa',mode:'sub'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button className="px-2 mr-1 md:mr-2 bg-white rounded-lg">
                          {variant.spa.qty}
                        </button>
                        <button className="px-1 py-1 bg-white rounded" onClick={()=> handleQty({name:'spa',mode:'add'})}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        </div>
                      </>
                      }
                    </div>
                  </div>
                </div>
                <details className="w-full pb-1 pl-12 pr-3">
                      <summary className="ml-[16px] md:ml-[26px] -mt-[19px] text-xs font-bold cursor-pointer custom-marker">Info<i className="arrow"></i></summary>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-3 mb-4">
                        <div className="max-w-[300px] md:max-w-full">
                          <p className="mb-2 text-xs italic">
                          “This smells like my favorite Bali spa. I feel so relaxed when I have it in the diffuser. It fills my home with scents. My guests are always commenting on it also.” - Michelle S.
                          </p>
                          <h1 className="text-xs font-bold">
                            Best use cases for Spa:
                          </h1>
                          <ul className="px-2 ml-2 text-xs list-disc">
                            <li>
                            On your towel to create mini spa moments in your home
                            </li>
                            <li>
                            In the bathroom in the morning
                            </li>
                            <li>
                            In a warm bath for a relaxing experience
                            </li>
                          </ul>
                        </div>
                        <div className="hidden md:block ml-2">
                          <h1 className="text-xs font-bold mb-2.5 ml-3">Ingredients:</h1>
                          <div className="grid grid-cols-2">
                            <div className="flex mb-5 items-center">
                              <img src={sp1} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Eucalyptus Antibacterial</h1>
                            </div>
                            <div className="flex mb-5 items-center">
                              <img src={sp2} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Geranium Calming</h1>
                            </div>
                            <div className="flex items-center">
                              <img src={sp3} alt="" className="w-[53px]" />
                              <h1 className="text-xs w-[72px]">Bergamot Uplifting</h1>
                            </div>
                            
                          </div>
                        </div>
                        <div className="absolute w-1 h-full border-l border-black -left-3"></div>
                      </div>
                </details>
              </div>

              <div className={'grid grid-cols-1 md:grid-cols-1 mt-[45px] rounded-lg relative '+opacity } style={{ 'backgroundColor': 'rgba(196, 196, 196, 0.2)' }}>
                <div className="bg-lightbrown absolute text-center w-[94px] right-[18px] -top-[22px] text-xs px-4 py-[3px] rounded-t -z-10">Free</div>
                <p className="absolute left-0 -top-[24px] text-[12px] md:text-base md:leading-5">Bonus (when buying today, {datenow} )</p>
                <div className="md:flex justify-between">  
                  <div className="flex px-1.5 md:px-4 ">
                    <div className="pt-[11px] pb-[7px]">
                      <img className="mr-2 w-[50px] h-[50px] md:mr-4 md:h-[41px] md:w-[41px]" src={book} alt="" />
                    </div>
                    <div className="pt-[6px] w-[83%] md:w-auto">
                      <h1 className="hidden md:block text-[15px] leading-[19px] font-bold">The Ultimate Guide To Essential Oils</h1>

                      <div className="flex justify-between md:hidden">
                        <h1 className="text-[12px] leading-[15px] font-bold">The Ultimate Guide To Essential Oils</h1>
                        
                        <div className="ml-3">
                          <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                            <strike>39 €</strike>{" "}
                            <span style={{ color: "#DEAB5B" }}>0 €</span>
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-between items-center md:hidden">
                        <h4 className="text-xs leading-4">Dr. Shanoons 150 page E-book</h4>
                        <div className="flex items-center mt-[7px]">
                          <h1 className="text-lightbrown text-base leading-5">Added</h1>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="rgba(222, 171, 91, 0.5)"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      
                      <h4 className="text-xs leading-4 hidden md:block">Dr. Shanoons 150 page E-book</h4>
                    </div>
                  </div>
                  <div className="flex items-center pr-[11px] md:pr-4">
                    <div className="flex items-center justify-between md:justify-end w-full h-full">
                      <div className="hidden md:block mr-2 md:mr-4">
                        <h1 style={{ color: "#6F6F6F" }} className="text-[13px] leading-4 md:text-base md:leading-5">
                          <strike>39 €</strike>{" "}
                          <span style={{ color: "#DEAB5B" }}>0 €</span>
                        </h1>
                      </div>
                      
                      <div className="hidden md:flex items-center mr-3">
                        <h1 className="text-lightbrown">Added</h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7"
                          viewBox="0 0 20 20"
                          fill="rgba(222, 171, 91, 0.5)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <details className="w-full pb-1 pl-12 pr-3">
                      <summary className="ml-[16px] md:ml-[26px] -mt-[19px] text-xs font-bold cursor-pointer custom-marker">Info<i className="arrow"></i></summary>
                      <div className="relative grid grid-cols-1 md:grid-cols-2 mt-3 mb-4">
                        <div className="max-w-[300px] md:max-w-full">
                          
                          <h1 className="text-xs font-bold">
                            What you'll learn:
                          </h1>
                          <ul className="px-2 ml-2 text-xs list-disc">
                            <li>
                            How to safely use essential oils
                            </li>
                            <li>
                            20 popular essential oils and their properties
                            </li>
                            <li>
                            Essential oil blends and recipes to use in the diffuser
                            </li>
                            <li>
                            Essential oils recipes for the skin
                            </li>
                            <li>
                            Other ways to utilise essential oils
                            </li>
                            <li>
                            Research on essential oils
                            </li>
                            <li>
                            The history of essential oils
                            </li>
                            <li>
                            How essential oils are made
                            </li>
                          </ul>
                        </div>
                        <div className="ml-2 mr-6 mt-[42px] md:mt-0">
                          <div className="flex justify-start md:justify-between items-center mb-3.5">
                            <div>    
                              <h1 className="text-xs font-bold">The Author</h1>
                              <h1 className="text-xs">Hira Shaheen, M.D.<br/>Aromatherapy Specialist</h1>
                            </div>
                            <div className="ml-[17px] md:ml-0">
                              <img src={dr1} alt="" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1">
                            <p className="text-[10px] leading-[12.55px]">
                            <b>About:</b> Dr. Shaheen is a medical doctor and a big advocate of holistic health. After graduating from medical school, she worked as a clinician in various hospitals and health facilities. She then discovered her passion for writing and decided to teach health knowledge.
                            </p>
                          </div>
                        </div>
                        <div className="absolute w-1 h-full border-l border-black -left-3"></div>
                      </div>
                </details>
              </div>
              <div className={'absolute h-full top-0 w-full bg-[#ffffff94] ' + overlay}></div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 mt-[48px] md:mt-[17px]">
                <div className="flex items-end justify-between md:justify-start">
                  <h1 className="text-xs">
                    <span className="text-base font-bold">Total</span> Including VAT and
                    shipping
                  </h1>
                  <div className="mb-1 text-right md:hidden">
                    <h1 style={{ color: "#B48B4C" }} className="font-semibold text-[13px] leading-4">You save {compare - price + extra} €</h1>
                    <h1 className="text-sm leading-[17.57px]">
                    <strike className="mr-1" style={{ color: "#818181" }}>{compare + extra} €</strike>
                              <span style={{ color: "#DEAB5B" }}>{price} €</span>
                    </h1>
                  </div>
                </div>

                <div className="mb-1 text-right hidden md:block">
                  <h1 style={{ color: "#B48B4C" }} className="font-semibold">You save {compare - price + extra} €</h1>
                  <h1 className="text-xl">
                  <strike className="mr-1" style={{ color: "#818181" }}>{compare + extra} €</strike>
                            <span style={{ color: "#DEAB5B" }}>{price} €</span>
                  </h1>
                </div>
              </div>
              <button
                // disabled = {disabled}
                onClick={() => addToCart(variant)}
                style={{ background: "#DEAB5B" }}
                className={"EEE w-full py-3 text-white flex justify-center rounded cursor-pointer " + opacity + " " + btnDisable}
              >
                {btnDisable == "" ? "BUY NOW":<svg version="1.1" className="h-[20px] w-[20px]" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg>}
              </button>
              <div className="color-red font-bold" id="demo">{errorMessage}</div>
              { isRunning && <div className="color-black text-center text-[16px] font-[600]">You cart is reserved for  <span className="font-[700]"> {minutes}:{formatTime(seconds)}</span>  more</div>}
            </div>
            {/* In Stock */}
            <div className="mt-4 md:mt-7">
              <h1 className="mb-1 ml-3 text-xs">
                <span className="font-bold">In stock: </span>19 left of the offer
              </h1>
              {/* <div className="grid grid-cols-8 py-4 border rounded-full">
                <div className="bg-green-300 border-r-2"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div></div>
              </div> */}
              <div className="">
                <div className="grid grid-cols-8 border rounded-full font-mulish border-[#848484]">
                  <div className="py-[10px] border-r-2 border-[#848484] rounded-l-full" style={{ background: "rgba(188, 177, 156, 0.5)" }}></div>
                  <div className="py-[10px] border-r-2 border-[#848484]" style={{ background: "linear-gradient(90deg, rgba(188, 177, 156, 0.5) 20%, transparent 20%)" }}></div>
                  <div className="py-[10px] border-r-2 border-[#848484]"></div>
                  <div className="py-[10px] border-r-2 border-[#848484]"></div>
                  <div className="py-[10px] border-r-2 border-[#848484]"></div>
                  <div className="py-[10px] border-r-2 border-[#848484]"></div>
                  <div className="py-[10px] border-r-2 border-[#848484]"></div>
                  <div className="py-[10px] rounded-r-full border-[#848484]"></div>
                </div>
              </div>
            </div>
            {/* 100% Satisfaction Guarantee */}
            {/* <div className="mt-4 bg-gray-200 rounded-lg">
              <div className="flex items-center p-[10px] md:p-4">
                <div className="mr-4 w-[66px]">
                  <img className="w-[50px] h-[50px]" src={tik} alt="" />
                </div>
                <div className="w-fit">
                  <h1 className="mb-1 text-xs">100% stisfaction guarantee</h1>
                  <p className="text-xs">
                    Try the diffuser for{" "}
                    <span className="font-bold">90 days</span> in your home, and
                    if you want to return it, we offer a free return and a full
                    refund - no questions asked.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center mt-2">
              <img src={amex} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={visa} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={master} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={bancontact} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={paypal} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={ideal} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={klarna} alt="" className="w-[34px] md:w-[45px] mr-2 border rounded-md" />
              <img src={applepay} alt="" className="w-[34px] md:w-[45px] border rounded-md" />
            </div>
          </div>

          <div className="block md:hidden mt-8 mb-10">
              <div className="grid grid-cols-4 mx-auto md:grid-cols-4 md:px-12">
                <div className="md:w-24 mx-auto text-center">
                  <img src={truck} alt="" className="mx-auto w-10 h-10"/>
                  <p className="text-xs w-[99px] mt-2">Free espress shipping and returns</p>
                </div>
                <div className="md:w-24 mx-auto text-center">
                  <img src={paid} alt="" className="mx-auto w-10 h-10"/>
                  <p className="text-xs w-[99px] mt-2">All duties and fees paid</p>
                </div>
                <div className="md:w-24 mx-auto text-center">
                  <img src={guarantee} alt="" className="mx-auto w-10 h-10"/>
                  <p className="text-xs w-[99px] mt-2">10-year<br/>warranty</p>
                </div>
                <div className="md:w-24 mx-auto text-center">
                  <img src={secure} alt="" className="mx-auto w-10 h-10"/>
                  <p className="text-xs w-[99px] mt-2">Secure<br/>payments</p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <img src={chat} className="w-[50px] mr-3 h-[50px]"/>
                <p className="w-[250px] text-xs">
                  Have questions about buying a diffuser?
                  Reach out to <a href="support@volantaroma.com" className="underline text-blue-400">support@volantaroma.com</a>
                </p>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
