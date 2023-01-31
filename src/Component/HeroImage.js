import "./HeroImage.css";
import IntroImg from "../assets/introImg.jpg"

import React from 'react'
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="hero">
        <div className="mask">
          <img 
          className="intro-img"
          src={IntroImg} alt="IntroImg"/>
        </div>

        <div className="content">
            <p>HI, I'M PRAGADEESWARAN</p>
            <h1>DEVELOP<span>ER.</span></h1>
        
           <div>
              <Link to="/project"
              className="btn"> project</Link>
             <Link to="/contact"
             className="btn-light"> contact </Link>
           </div>
        </div>


    </div>
  )
}

export default HeroImage