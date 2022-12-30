import React from 'react'
import "./About.css";
import about from "../../assets/about.jpg";
import rose from "../../assets/about-me-1.png";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about'>
                <div className='about-left'>
                    <img src={about} alt="img"/>
                    <img src={rose} alt="img" className='rose'/>
                </div>
                <div className='about-right'>
                    <div className='one'>
                        ABOUT ME
                    </div>
                    <div className='two'>
                        Live My Style
                    </div>
                    <div className='four'>
                        The vast range of designer and Highstreet stores
                        in London makes it a haven for personal
                        stylists, and so London, in particular, 
                        is at the heart of the fashion community 
                        this demand and serving the 
                        general public who view the service as a 
                        luxury but a beneficial experience.
                    </div>
                    <button>
                        about me
                    </button>
                </div>
        </div>
    </div>
    
  )
}

export default About