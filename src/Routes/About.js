import React from 'react'

import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroImg2 from '../Component/HeroImg2'
import AboutContant from '../Component/AboutContant'


function About() {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="ABOUT" text="friendly Fullstack Developer"/>
       <AboutContant/>
       <Footer/>
    </div>
  )
}

export default About