import React, { useState } from 'react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const cartCount = 8;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 px-35 flex justify-between items-center flex-wrap bg-gradient-to-r from-pink-500 to-yellow-500 p-4 shadow-md">
      {/* Left side - Restaurant name */}
      <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
        <Link to="/">Deepak Restaurant</Link>
      </div>

      {/* Mobile menu button */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Right side - Navigation links */}
      <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col md:flex-row md:space-x-6 gap-y-4 md:gap-y-0 mt-4 md:mt-0 text-lg text-white md:items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-red-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-red-700'
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-red-700'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-red-700'
            }
          >
            About
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'hover:text-red-700'
            }
          >
            <FaSearch />
          </NavLink>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'hover:text-red-700'
              }
            >
              <FaCartPlus size={24} />
            </NavLink>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
