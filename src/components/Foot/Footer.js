import React from 'react'
import "./Footer.css";
import foot from "../../assets/footer-logo.svg";
import foot2 from "../../assets/header-image-2.png";

const Footer = () => {
  return (
    <div className='foot'> 
    <div className='f-logo'>
    <img src={foot} alt="img"/>
    </div>
      <h5>randikatharindurandeniya@gmail.com</h5>
      <h5>2022 wp themes to react</h5>
      <img src={foot2} alt="img" className='footers'/>
    </div>
  )
}

export default Footer
