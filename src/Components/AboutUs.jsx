// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-yellow-50 h-full py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Deepak Restaurant</h2>
        <p className="text-gray-600 text-lg mb-8">
          At <span className="font-semibold text-yellow-700">Our Resturant</span>, we blend tradition with innovation.
          From farm-fresh ingredients to handcrafted dishes, our mission is to serve food that warms your heart and soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Our Story</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Started in 2010 as a family-owned kitchen, we’ve grown into a local favorite.
              Every dish is a celebration of flavors inspired by generations of culinary passion.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Meet Our Chefs</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Led by Chef Deepak Chhantyal and her award-winning team, we combine fresh techniques with traditional
              recipes to offer a menu that delights both new and returning guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
