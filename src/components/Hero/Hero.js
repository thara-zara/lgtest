import React from 'react';
import "./Hero.css";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className='container'>
        <div className='hero'>
            <div className='hero-left'>
                <div className='one'>
                        stylist and fashion <br/> blogger
                </div>
                <div className='two'>
                    all it <br/> matters is <br/> style
                </div>
                <div className='three'>
                    lyla grayson
                </div>
                <div className='four'>
                    here are numeris styles in the world and the numbers growing high
                    styles in the world and the
                </div>
                <button>
                    read more
                </button>
            </div>
            <div className='hero-right'>
                <div className='right-card'>
                <img src={hero} alt="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero