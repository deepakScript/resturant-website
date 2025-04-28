import React from 'react';
import Slider from 'react-slick';
import chhola from '../images/chhola.jpg';
import dosa from '../images/dosa.jpg';
import gujrati from '../images/gujrati.jpeg';
import idli from '../images/idli.jpg';
import masala from '../images/masala.jpg';
import paneer from '../images/paneer.jpg';

// Banner component
const Banner = () => {
    // Settings for the Slider component
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={chhola} alt="Chhola" />
                </div>
                <div>
                    <img src={dosa} alt="Dosa" />
                </div>
                <div>
                    <img src={gujrati} alt="Gujrati" />
                </div>
                <div>
                    <img src={idli} alt="Idli" />
                </div>
                <div>
                    <img src={masala} alt="Masala" />
                </div>
                <div>
                    <img src={paneer} alt="Paneer" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
