import React from 'react'

import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroImg2 from '../Component/HeroImg2'
import Form from '../Component/Form'


function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact