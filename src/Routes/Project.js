import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroImg2 from '../Component/HeroImg2'
import PricingCard from '../Component/PricingCard'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my projects"/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;