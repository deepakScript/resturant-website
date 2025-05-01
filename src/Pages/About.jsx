import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className='relative min-h-screen flex'>
      <div className='flex-grow'>
        <Header />
        <AboutUs />
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default About
