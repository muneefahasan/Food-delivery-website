import React, { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { socialIcons } from '../../assets/dummydata';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
];

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for subscribing! We'll send updates to ${email}`);
        setEmail('');
    }

    return (
        <footer className='bg-gray-900 text-purple-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12'>

                    {/*LEFT COLUMN*/}
                    <div className='space-y-6'>
                        <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold font-sacramento text-purple-400 animate-pulse'>
                            Foodie-Frenzy
                        </h2>
                        <p className='text-purple-200/30 text-sm font-sacramento italic'>
                            When culinary artistry meets doorstep convenience. <br />
                            Savor handcrafted perfection, delivered with care.</p>

                        <form onSubmit={handleSubmit} className='relative mt-4 group'>
                            <div className='flex items-center gap-2 mb-2'>
                                <FaRegEnvelope className='text-purple-400 animate-pulse' />
                                <span className='font-bold text-purple-400'>Get Exclusive offers </span>
                            </div>
                            <div className='relative'>
                                <input type='email' placeholder='Enter your email...' value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className='w-full px-4 py-2.5 rounded-lg bg-gray-800 border-2 border-purple-400/30 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 placeholder-purple-200/50' required />
                                <button type='submit' className='absolute right-1 top-1 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg hover:shadow-purple-400/30 overflow-hidden transition'>
                                    <span className='font-bold text-sm tracking-wide transition-transform duration-300 group-hover:-translate-x-1'>
                                        Join Now
                                    </span>
                                    <BiChevronRight className='text-xl transition-transform duration-300 group-hover:animate-spin flex-shrink-0' />
                                    <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-50/30 to-transparent group-hover:translate-x-full transition-transform duration-500' />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* MIDDLE COLUMN*/}
                    <div className='flex justify-center'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-4 border-l-4 border-purple-400 pl-3 font-merriweather italic text-purple-300'>
                                Navigation
                            </h3>
                            <ul className='space-y-3'>
                                {navItems.map(item => (
                                    <li key={item.name}>
                                        <a href={item.link} className='flex items-center hover:text-purple-400 transition-all group font-lora hover:pl-2'>
                                            <BiChevronRight className='mr-2 text-purple-400 group-hover:animate-bounce' />
                                            <span className='group-hover:italic'>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN*/}
                    <div className='flex justify-center md:justify-end'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold mb-4 border-l-4 border-purple-400 pl-3 font-merriweather italic text-purple-300'>
                                Social Connect
                            </h3>
                            <div className='flex space-x-4'>
                                {socialIcons.map(({ icon: Icon, link, color, label }, idx) => (
                                    <a target='_blank' rel="noopener noreferrer" href={link} key={idx}
                                        className='text-2xl bg-purple-400/10 p-3 rounded-full hover:bg-purple-400/20 hover:scale-110 transition-all duration-300 relative group'
                                        style={{ color }}>
                                        <Icon className='hover:scale-125 transition-transform' />
                                        <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 bg-purple-400 text-black px-2 pt-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM SECTION*/}
                <div className='border-t border-purple-800 pt-8 mt-8 text-center'>
                    <p className='text-purple-400 text-lg mb-2 font-playfair'>
                        &copy; 2025 Foodie-Frenzy. All rights reserved.
                    </p>
                    <div className='group inline-block'>
                        <a href="https://hexagondigitalservices.com"
                            target='_blank' rel="noopener noreferrer" className='text-lg font-sacramento bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent hover:text-fuchsia-300 transition-all duration-500'>
                            Designed By Hexagon Digital Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;