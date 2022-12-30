import React from 'react';
import "./Service.css";
import how from "../../assets/how.png";
import contact from "../../assets/contact.png";

const Service = () => {
  return (
    <div className='service-container'>
<div className='service'>
        <div className='service-one'>
        SERVICES
        </div>
        <div className='service-two'>
        How Can I Help?
        </div>
        <div className='service-three'>
            <div className='s-img-left'>
                
            </div>
            <div className='fashion'>
            <img src={how} alt="img"/>
            <h5>Fashion Design</h5>
            <p>Designer and Highstreet stores in London makes it a 
                haven for personal stylists, 
                and so London, in particular,
                 is at the heart of the fashion
                  community.
            </p>
            </div>
            <div className='fashion'>
            <img src={how} alt="img"/>
            <h5>Fashion Design</h5>
            <p>Designer and Highstreet stores in London makes it a 
                haven for personal stylists, 
                and so London, in particular,
                 is at the heart of the fashion
                  community.
            </p>
            </div>
            <div className='fashion'>
            <img src={how} alt="img"/>
            <h5>Fashion Design</h5>
            <p>Designer and Highstreet stores in London makes it a 
                haven for personal stylists, 
                and so London, in particular,
                 is at the heart of the fashion
                  community.
            </p>
            </div>
            <div className='s-img-right'>
                
            </div>
        </div>
        <div className='service-four'>
            <button>
                more services
            </button>
        </div>
    </div>
    </div>
    
  )
}

export default Service