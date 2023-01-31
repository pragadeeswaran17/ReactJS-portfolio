import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick=()=> {setClick(!click)}


  const [color, setColor] = useState(false)
  const changeColor=()=> {
    if(window.scrollY >=100){
        setColor(true)
    }else{
        setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)
  



  return (
    
        <div className={color? "header header-bg" : "header"}>
          <h1>Develop<span>er.</span></h1>
       
       <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/" className='nav-btn'>Home</Link>
        </li>
        <li>
            <Link to="/project" className='nav-btn'>Project</Link>
        </li>
        <li>
            <Link to="/about" className='nav-btn'>About</Link>
        </li>
        <li>
            <Link to="/contact" className='nav-btn'>Contact</Link>
        </li>
       
       </ul>

       <div className='hamburger' onClick={handleClick}>
        {click ? 
        (<FaTimes size={30} style={ {color: "#fff" } } />) :
        (<FaBars size={30} style={ {color: "#fff" } } />)
        }
       </div>

   </div>
  )
}



export default Navbar