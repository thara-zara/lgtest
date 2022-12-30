import React, { useState } from 'react';
import "./Nav.css";
import navlogo from "../../assets/logo.svg";
import bar from "../../assets/bars.svg";
import menu from "../../assets/header-image-2.png"
import { Link } from 'react-router-dom';

const Nav = () => {

const [shownav, setShowNav] = useState(false);
const handleClick = () =>setShowNav(!shownav);
  return (
    <div className='navigation'>
    <div className='nav'>
        <div className='nav-item'>
            <div className='logo'>
           <Link to="/">   <img src={navlogo} alt="img"/></Link>  
            </div>
            <div className={shownav ? "nav-item menu active" :'menu'} onClick={handleClick}>
                <img src={bar} alt="img"/>
            </div>
            <div className={shownav ? "menu-item active":"menu-item"}>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>blog</li>
                    <li>shop</li>
                </ul>
                {/* <div className='img-one'>
                <img src={menu} alt="img"/>
                </div>
                <div className='img-two'>
                <img src={menu} alt="img"/>
                </div> */}
    </div>

        </div>
    </div>
    </div>
  )
}

export default Nav