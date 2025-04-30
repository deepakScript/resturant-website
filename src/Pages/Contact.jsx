import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      <div className='flex-grow'>
        <Header />
        <div>
          <ContactUs />
        </div>
      </div >
      <Footer />
    </div>
  )
}

export default Contact
