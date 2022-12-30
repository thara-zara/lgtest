import React from 'react'
import "./Cart.css";
import img1 from "../../assets/us.jpg";
import one from "../../assets/f1.jpg";
import two from "../../assets/ga1.jpg";
import five from "../../assets/five.jpg";
import cart from "../../assets/cart.svg";
import Footer from "../Foot/Footer";

const Cart = () => {
  return (
    <div className='cart-body'>
      <div className='cart'>
        <div className='cart-hero'>
              <div className='cart-left'>
                  <img src={img1} alt="img"/>
              </div>
              <div className='cart-right'>
                  <h3>gold fancy</h3>
                  <h4>$204</h4>
                  <p>When, 
                    while the lovely valley teems with 
                              vapour around me,
                              and the meridian sun strikes the upper
                              surface of the im
                          penetrable foliage 
                  </p>

                  <div className='select'>
                  <label>select</label>
                  <div>
                    <select>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                    </select>
                  </div>
                  </div>

                  <div className='color-btn'>
                    <div className='c-name'>
                      color
                    </div>
                    <div className='colors'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  
                  <div className='qty'>
                    <input type="number"></input>
                    <button>add to cart</button>
                  </div>
              </div>
            </div>

            <div className='item-des'>
              <div className='des-btn'>
                  <button>description</button>
              </div>
              <div className='add-info'>
                additional information
              </div>
              <div className='review'>
                reviews <div></div>
              </div>
              <h6>
                75% ryson,15% nyloan,10% spandex strech fabric and fit
                handwash cold imported. spandex handwash cold imported 
                strech fabric and fit
                style no:b45799852
              </h6>
            </div>

            <div className='related'>
              <h1>related items</h1>
              <div className='items'>
              <div className='shop-card'>
                <div className='shop-overlay'>
                    <h5>Navy Overall</h5>
                    <h6>$524</h6>
                    <span><img src={cart} alt="img"/></span> 
                </div>
                  <img src={one} alt="img"/>
              </div>
              <div className='shop-card'>
                <div className='shop-overlay'>
                    <h5>Navy Overall</h5>
                    <h6>$224</h6>
                    <span><img src={cart} alt="img"/></span> 
                </div>
                <img src={two} alt="img"/>
              </div>
              <div className='shop-card'>
                <div className='shop-overlay'>
                    <h5>Navy Overall</h5>
                    <h6>$224</h6>
                    <span><img src={cart} alt="img"/></span> 
                </div>
                <img src={five} alt="img"/>
              </div>
              </div>
            </div>
      </div>
      </div>
  )
}

export default Cart
