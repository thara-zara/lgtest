import React from 'react';
import "./Blog.css"
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";

const Blog = () => {
  return (
    <div className='shop'>
        <div className='shop-body'>
            <div className='shop-one'>
            Blog
            </div>
            <div className='shop-two'>
            Fashion News  
            </div>
            <div className='blog-three'>
                <div className='blog-card'>
                    <div className='card-top'>
                        <img src={one} alt="img"/>
                    </div>
                    <div className='card-btm'>
                    <div className='blog-body'>
                        <h5>Behind Zara’s Cat Walk</h5> 
                        <p>When, while the lovely valley teems with 
                            vapour around me, and the meridian sun strikes the upper
                            surface of the impenetrable foliage 
                            of my trees, and but a fe ...</p>
                        <h6>Read More</h6>
                        </div>
                    </div>
                </div>
                <div className='blog-card'>
                    <div className='card-top'>
                        <img src={two} alt="img"/>
                    </div>
                    <div className='card-btm'>
                        <div className='blog-body'>
                        <h5>Behind Zara’s Cat Walk</h5> 
                        <p>When, while the lovely valley teems with 
                            vapour around me, and the meridian sun strikes the upper
                            surface of the impenetrable foliage 
                            of my trees, and but a fe ...</p>
                        <h6>Read More</h6>
                        </div>
                    </div>
                </div>
                <div className='blog-card'>
                    <div className='card-top'>
                        <img src={three} alt="img"/>
                    </div>
                    <div className='card-btm'>
                    <div className='blog-body'>
                        <h5>Behind Zara’s Cat Walk</h5> 
                        <p>When, while the lovely valley teems with 
                            vapour around me, and the meridian sun strikes the upper
                            surface of the impenetrable foliage 
                            of my trees, and but a fe ...</p>
                        <h6>Read More</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
