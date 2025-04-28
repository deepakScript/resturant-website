import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chhola from '../images/chhola.jpg'
import dosa from '../images/dosa.jpg'
import gujrati from '../images/gujrati.jpeg'
import idli from '../images/idli.jpg'
import masala from '../images/masala.jpg'
import paneer from '../images/paneer.jpg'
import { Autoplay } from 'swiper/modules';


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,  // Fixed capitalization (was 'Autoplay')
        autoplaySpeed: 1000,  // Changed to 1000ms (1 second) and fixed capitalization (was 'AutoplaySpeed')
        centerMode: true,  // Added to enable center-focused effect
        centerPadding: '0',  // Added to control center spacing
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    };

    // Sample restaurant images - replace with your actual images
    const restaurantImages = [
        { id: 1, src: chhola, alt: 'Restaurant Interior' },
        { id: 2, src: dosa, alt: 'Dining Area' },
        { id: 3, src: gujrati, alt: 'Bar Section' },
        { id: 4, src: idli, alt: 'Outdoor Seating' },
        { id: 5, src: masala, alt: 'Food Presentation' },
        { id: 6, src: paneer, alt: 'Food Presentation' },
    ];

    return (
        <div className="py-10 max-w-6xl mx-auto px-4">
            <h2 className="text-center text-3xl font-medium text-gray-800 mb-8">Our Foods</h2>
            <div className="relative w-full">
                <Slider {...settings}>
                    {restaurantImages.map((image) => (
                        <div key={image.id} className="px-2 focus:outline-none transition-all duration-300 transform hover:scale-105">
                            <div className=" m-x-300 relative overflow-hidden rounded-lg shadow-md transition-all duration-300 h-64 hover:shadow-lg">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;