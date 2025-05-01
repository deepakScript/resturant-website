import React from 'react'
import { FaHome, FaMapSigns, FaPhone } from 'react-icons/fa';

const ContactUsBottom = () => {
    return (
        <div className='w-fulld h-50 flexic justify-center bg-red-600 gap-x-20 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-whitenp '>
            <div className='flexic flex-col justify-center text-center '>
                <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                    <FaHome className='text-5xl' />
                </div>
                <div className='text-white space-x-3'>
                    <h1 className='text-3xl'>Deepak Resturant</h1>
                    <p>Best Resturant in Pokhara</p>
                </div>
            </div>
            <div className='flexic flex-col justify-center text-center '>
                <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                    <FaPhone className='text-5xl' />
                </div>
                <div className='text-white space-x-3'>
                    <h1 className='text-3xl'>Phone</h1>
                    <p>+977-9746311761</p>
                </div>
            </div>
            <div className='flexic flex-col justify-center text-center '>
                <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                    <FaMapSigns className='text-5xl' />
                </div>
                <div className='text-white gap-x-10'>
                    <h1 className='text-3xl'>Location</h1>
                    <p>Panthi Galli, Pokhara</p>
                </div>
            </div>

        </div>
    )
}

export default ContactUsBottom
