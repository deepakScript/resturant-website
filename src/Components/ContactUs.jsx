import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaHome, FaMapSigns, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
    try {
        // Replace these with your EmailJS service details
        const serviceID = 'service_sje2za6';
        const templateID = 'KPENiVlRNdx0xFRTg';
        const userID = 'KPENiVlRNdx0xFRTg';

        await emailjs.send(serviceID, templateID, formData, userID);

            setSubmitStatus({ success: true, message: 'Message sent successfully!' });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }
        return (
            <section className='flexic flex-col pt-10 gap-y-30'>
                <div className='flexic flex-col text-center space-y-2'>
                    <div className='space-y-2 mb-10'>
                        {submitStatus && (
                            <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        <h1 className='text-5xl font-bold'>Contact Us</h1>
                        <p>Any Questions or remarks? Just write us a message</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='space-y-5'>
                            <div className='flexic flex-row justify-center gap-x-7'>
                                <div className=''>
                                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left ml-2'>Full Name:</label>
                                    <input type="text" id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Enter your Name'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-2 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent' required />
                                </div>
                                <div>
                                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-1 text-left ml-2'>Email:</label>
                                    <input type="email" id='name'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your Email'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-2 focus:ring-2
                    focus:ring-blue-500 focus:border-transparent' required />
                                </div>
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="How can we help you?"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            <button className='block text-xl font-medium text-gray-600 w-full px-4 py-2 bg-pink-500 rounded-3xl
                    hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
                                disabled={isSubmitting}
                                type='submit'>
                                {isSubmitting ? 'Sending ....' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full h-50 flexic justify-center bg-red-600 gap-x-20 '>
                    <div className='flexic flex-col justify-center text-center '>
                        <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                            <FaHome className='text-5xl' />
                        </div>
                        <div className='text-yellow-500 space-x-3'>
                            <h1 className='text-3xl'>Our Resturant</h1>
                            <p>Best Resturant in Pokhara</p>
                        </div>
                    </div>
                    <div className='flexic flex-col justify-center text-center '>
                        <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                            <FaPhone className='text-5xl' />
                        </div>
                        <div className='text-yellow-500 space-x-3'>
                            <h1 className='text-3xl'>Phone</h1>
                            <p>+977-9746311761</p>
                        </div>
                    </div>
                    <div className='flexic flex-col justify-center text-center '>
                        <div className='m-5 bg-white p-10 -mt-30 rounded-full text-yellow-500 bg-gradient-to-r from-pink-300 to-rose-600'>
                            <FaMapSigns className='text-5xl' />
                        </div>
                        <div className='text-yellow-500 gap-x-10'>
                            <h1 className='text-3xl'>Location</h1>
                            <p>Panthi Galli, Pokhara</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    };



    export default ContactUs
