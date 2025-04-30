// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl px-35 mx-auto p-6 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left - Restaurant Name */}
        <div className="text-2xl font-bold">
          <Link to="/">MyRestaurant</Link>
        </div>

        {/* Right - Columns */}
        <div className="flex flex-col gap-x-40 md:flex-row gap-12">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/careers" className="hover:underline">Careers</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg">Support</h3>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/help" className="hover:underline">Help Center</Link>
          </div>

          {/* columne 3 */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg">Support</h3>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/help" className="hover:underline">Help Center</Link>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className=" bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white text-center pb-3">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyRestaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
