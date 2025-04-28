import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="w-full flexic justify-between flex-wrap bg-white p-4 shadow-md  bg-gradient-to-r from-pink-500 to-yellow-500">
        {/* Left side - Restaurant name */}
        <div className="text-2xl ml-30 font-bold bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
          <Link to='/'>My Resturant</Link>
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Right side - Navigation links */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-gray-700 flex md:flex-row md:space-x-2 gap-x-5 text-lg mr-30">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'hover:text-red-600'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'hover:text-red-600'
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'hover:text-red-600'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white font-semibold' : 'hover:text-red-600'
              }
            >
              About
            </NavLink>

          </div>
        </div>
      </nav>
  )
}

export default Header
