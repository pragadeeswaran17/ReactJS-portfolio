import React from 'react'
import "./AboutContant.css"
import { Link } from 'react-router-dom'

import React1 from "../assets/react-js-top2.png"
import React2 from "../assets/react-js bottom.jpg"


function AboutContant() {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who Am I</h1>
            <p>
                Im a fullstack developer. 
                I create responsive secure website 
                for my clients.
            </p>
            <Link to="/Contact">
                <button className='btn'>
                    contact
                </button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React2}
                    className="img"
                    alt='true'/>
                </div>

                <div className='img-stack bottom'>
                    <img src={React1}
                    className="img"
                    alt='true'/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AboutContant