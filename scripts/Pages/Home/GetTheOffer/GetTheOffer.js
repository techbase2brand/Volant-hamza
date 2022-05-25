import React from 'react'
import './GetTheOffer.css'
import diffisioncolor from './Images/diffusioncolor.png';
import oils from './Images/essentialoils.png';
import yellowTick from './Images/yellowtick.svg';



export default function GetTheOffer() {
    return (
        <div className='getOffer' id='getOfferNOw'>
            <div className="all_data">
                <h1>Get the offer now</h1>
                <div className="imageCont">
                    <div className='dataCont text-center'>
                        <div className="data1">
                            <img className='image_1 md:max-w-[342px] aaabb1' src={diffisioncolor} alt="diffusioncolor" />
                            <div className="1">
                                <h3 className='belowText'>1. Select diffuser colour</h3>
                            </div>
                        </div>
                        {/* <h3 className='belowText'>1. Select diffuser colour</h3> */}
                    </div>

                    <div className='dataCont text-center'>
                        <div className="data1">
                            <img className='image_2 md:max-w-[342px] aaabb1' src={oils} alt="" />
                            
                            <div className="2">
                                <h3 className='belowText'>2. Pick three or more oils</h3>
                            </div>
                        </div>
                        {/* <h3 className='belowText'>2. Pick three or more oils</h3> */}
                    </div>

                    <div className='dataCont text-center'>
                        <div className="data1 offerText">
                            <div className="aaabb md:max-w-[342px]">
                                <div className="yellotick flex justify-center">
                                    <img src={yellowTick} alt="" className='h-[40px] w-[40px]'/>
                                </div>
                                <h3 className='guarantee'>
                                    100% satisfaction guarantee
                                </h3>
                                <p className='para1'>
                                    Try the diffuser for <strong>90 days</strong> in your home, and if you want to return it, we offer a free return and a full refund - no questions asked.
                                </p>
                            </div>

                            <div className="mobiledata">
                                <h3 className='guarantee'>
                                    Satisfaction guarantee
                                </h3>
                                <div className='mobiletickData'>
                                    <div className="yellotick">
                                        <img src={yellowTick} alt="" />
                                    </div>
                                    <p className='para2'>
                                        Try the diffuser for <strong>90 days</strong>  in your home.
                                    </p>
                                </div>

                            </div>
                            <div className="3 bg-white">
                                <h3 className='belowText'>3. Go through the checkout</h3>
                            </div>
                        </div>
                        
                     
                        {/* <h3 className='belowText'>3. Go trough the checkout</h3> */}
                    </div>
                </div>

                {/* <div className="ccc">
                    <div className="1">
                        <h3 className='belowText'>1. Select diffuser colour</h3>
                    </div>
                    <div className="2">
                        <h3 className='belowText'>2. Pick three or more oils</h3>
                    </div>
                    <div className="3">
                        <h3 className='belowText'>3. Go trough the checkout</h3>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
