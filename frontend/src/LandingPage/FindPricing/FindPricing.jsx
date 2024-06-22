import React, { useEffect } from 'react';
import './FindPricing.css';
import Aos from "aos"
import 'aos/dist/aos.css'

function FindPricing() {

  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <div className='FindPricing'>
      <div className="container">
        <div className="leftcontainer" data-aos="fade-right">
          <h1>Choose a subscription that's right for you</h1>
          <p>Find your perfect balance of collaboration, security, and support with a C-suite Academy subscription.</p>
        </div>
        <div className="rightcontainer" data-aos="fade-left">
          <button>Click here</button>
        </div>
      </div>
    </div>
  );
}

export default FindPricing;