import HeroBG from '../../assets/images/backgrounds/heroBGImage.jpg';
import Count from './count'
import { useState } from 'react';
import Timer from './timer';



const time = [2, 12, 30]; //days, hours, minutes

function Hero(){

    const timeInSecond = time[0] * 24 * 3600 + time[1] * 3600 * time[2] * 60;

    

    return(
        <>
        <div className="hero__wrapper">
            <div className="hero__text">
                <h1> Countdown’s on! Grab up to <span className='discount'>40%</span> off before it’s gone!</h1>
                <h2>
                    <Timer></Timer>
                </h2>
            </div>
            <div className="hero__img">
                <img src={HeroBG} alt="" />
            </div>
        </div>
        </>
    )
}

export default Hero