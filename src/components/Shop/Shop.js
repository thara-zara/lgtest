import React from 'react';
import "./Shop.css";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import cart from "../../assets/cart.svg";
import { Link } from 'react-router-dom';


const Shop = () => {


  return (
    <div className='shop'>
      <div className='shop-body'>
        <div className='shop-one'>
        SHOP
        </div>
        <div className='shop-two'>
        New Collection 
        </div>
        <div className='shop-three'>
          <Link to="/SingleProduct">
            <div className='shop-cards'>
                <div className='shop-overlays'>
                    <h5>Navy Overall</h5>
                    <h6>$284</h6>
                <span><img src={cart} alt="img"/></span>
                </div>
              <img src={one} alt="img"/>
            </div>
          </Link>
          <Link to="/SingleProduct">
            <div className='shop-cards'>
                <div className='shop-overlays'>
                    <h5>Navy Overall</h5>
                    <h6>$224</h6>
                    <span><img src={cart} alt="img"/></span> 
                </div>
                <img src={two} alt="img"/>
            </div>
            </Link>
            <Link to="/SingleProduct">
            <div className='shop-cards'>
                <div className='shop-overlays'>
                    <h5>Navy Overall</h5>
                    <h6>$224</h6>

                   <span><img src={cart} alt="img"/></span> 
           
                </div>
                <img src={three} alt="img"/>
            </div>
            </Link>
        </div>
        <div className='shop-four'>
            <button>
                see more
            </button>
        </div>
      </div>
    </div>
  )
}

export default Shop
