import React from 'react'
import { 
    FaFacebook, 
    FaHome, 
    FaInstagram, 
    FaLinkedin, 
    FaMailBulk, 
    FaPhone
   } from 'react-icons/fa';

import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
             <div className='left'>
                <div className='location'>
                    <FaHome 
                    size={20} 
                    style={{color:"#FFF", 
                    marginRight: "2rem"}}/>
                    <div>
                        <p>NO: 5 Kalari Muniyappan Kovil St..</p>
                        <p>Kallakurichi.</p>
                        <p>TamilNadu.</p>
                    </div>
                </div>
                <div className='phone'>
                   <h4>
                      <FaPhone 
                      size={20} 
                      style={{color:"#FFF", 
                      marginRight: "2rem"}}/>

                   +91 9787498776</h4>
                </div>

                <div className='email'>
                 <h4>
                      <FaMailBulk 
                      size={20} 
                      style={{color:"#FFF", 
                      marginRight: "2rem"}}/>

                   pragadeeswaran647@gmail.com</h4>
                </div>

             </div>



         <div className="right">
                 <h4>
                    About ME
                 </h4>
                 <p>
                    this is me pragadeeswaran
                 </p>

                 <div className='social'>

                <FaFacebook 
                size={30} 
                style={{color:"#FFF", 
                marginRight: "2rem"}}
                />

               <FaInstagram
                size={30} 
                style={{color:"#FFF", 
                marginRight: "2rem"}}
                />

               <FaLinkedin
                size={30} 
                style={{color:"#FFF", 
                marginRight: "2rem"}}
                />

               </div>




             </div>
        </div>


    </div>
  )
}

export default Footer;