import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bannerimg from '../images/banner.jpeg'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <>
    <Header />
    <section className="relative w-full h-[570px] bg-[position:50%_30%]  bg-cover" style={{ backgroundImage: `url(${bannerimg})`  }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-12">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-lg md:text-xl mb-6">Your favorite place to enjoy delicious meals!</p>
          <a href="#menu" className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-red-500 transition duration-300">
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
    <section>
        <Banner />
    </section>
    <Footer />
    </>
  )
}

export default Home
