import React from 'react';
import "./Contact.css";
import be from "../../assets/be.jpg";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className='con'>
    <img src={contact} alt="img" className='contact'/>
      <div className='con-left'>
            <h5>lyla grason</h5>
            <h1>
                i make <br/> your style <br/>better
            </h1>
            <button>
                contact me
            </button>
      </div>
      <div className='con-right'>
        <img src={be} alt="img"/>
      </div>
    </div>
  )
}

export default Contact
