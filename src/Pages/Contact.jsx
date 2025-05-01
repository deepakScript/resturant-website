import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'
import ContactUsBottom from '../Components/ContactUsBottom'


const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      <div className='flex-1'>
        <Header />
        <div>
          <ContactUs />
        </div>
      </div >
      <div>
        <ContactUsBottom />
        <Footer />
      </div>
    </div>
  )
}

export default Contact
