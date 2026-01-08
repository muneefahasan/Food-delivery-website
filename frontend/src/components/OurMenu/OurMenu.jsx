import React, { useState } from 'react';
import { useCart } from '../../CartContext/CartContext';
// Used OmhDD instead

import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './OurMenu.css';

// Using dummyMenuData from OmhDD as per previous file content.
// Re-importing from OmhDD to be safe if dummydata doesn't have it.
import { dummyMenuData as menuData } from '../../assets/OmhDD';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Desserts', 'Drinks'];

const OurMenu = () => {

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    // Using imported menuData
    const displayItems = (menuData[activeCategory] || menuData[activeCategory.toLowerCase()] || []).slice(0, 4);

    const { cartItems, addToCart, removeFromCart } = useCart();
    const getQuantity = id => (cartItems.find(i => i.id === id)?.quantity || 0);

    return (
        <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200'>
                    <span className='font-dancingScript block text-5xl md:text-7xl sm:text-6xl mb-2'>
                        Our Exquisite Menu
                    </span>
                    <span className='block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-purple-100/80'>
                        A Symphony of Flavours
                    </span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-16'>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform 
                        font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm ${activeCategory === cat ?
                                    'bg-gradient-to-r from-purple-900/80 to-indigo-700/80 border-purple-800 scale-100 text-white' : 'bg-gray-800/40 border-purple-800/30 text-purple-100/80 hover:bg-purple-900/40'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                    {displayItems.map((item, i) => {
                        const quantity = getQuantity(item.id);
                        return (
                            <div key={item.id} className='relative bg-gray-900/40 rounded-2xl overflow-hidden border border-purple-800/30 backdrop-blur-sm flex flex-col transition-all duration-500 hover:border-purple-600/50'
                                style={{ '--index': i }}>
                                <div className='relative h-48 sm:h-56 md:h-60 flex items-center justify-center bg-black/20'>
                                    <img src={item.image} alt={item.name}
                                        className='max-h-full max-w-full object-contain transition-all duration-700 hover:scale-105' />
                                </div>
                                <div className='p-4 sm:p-6 flex flex-col flex-grow'>
                                    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-purple-800/50 to-transparent opacity-50 transition-all duration-300' />
                                    <h3 className='text-xl sm:text-2xl mb-2 font-dancingScript text-purple-100 transition-colors'>
                                        {item.name}
                                    </h3>
                                    <p className='text-purple-100/80 text-xs sm:text-sm mb-4 font-cinzel leading-relaxed'>
                                        {item.description}
                                    </p>
                                    <div className='mt-auto flex items-center gap-4 justify-between'>
                                        <div className='bg-purple-900/30 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg border border-purple-500/20'>
                                            <span className=' text-xl font-bold text-purple-300 font-dancingScript'>
                                                {item.price}
                                            </span>
                                        </div>

                                        <div className='flex items-center gap-2'>
                                            {quantity > 0 ? (
                                                <>
                                                    <button className='w-8 h-8 rounded-full bg-purple-900/40 flex items-center
                                                justify-center hover:bg-purple-800/50 transition-colors border border-purple-500/30' onClick={() => quantity > 1 ? addToCart(item, quantity - 1) : removeFromCart(item.id)}>
                                                        <FaMinus className='text-purple-100' />
                                                    </button>
                                                    <span className='w-8 text-center text-purple-100'>
                                                        {quantity}
                                                    </span>
                                                    <button className='w-8 h-8 rounded-full bg-purple-900/40 flex items-center
                                                justify-center hover:bg-purple-800/50 transition-colors border border-purple-500/30'
                                                        onClick={() => addToCart(item, quantity + 1)}>
                                                        <FaPlus className='text-purple-100' />
                                                    </button>
                                                </>
                                            ) : (

                                                <button
                                                    onClick={() => addToCart(item, 1)}
                                                    className='bg-purple-900/40 px-4 py-1.5 rounded-full
                                                font-cinzel text-xs uppercase sm:text-sm tracking-wider transition-transform duration-300 
                                                hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20 relative overflow-hidden border border-purple-800/50 hover:bg-purple-800/40'>
                                                    <span className='relative z-10 text-xs text-purple-100'>
                                                        Add to Cart
                                                    </span>
                                                </button>

                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurMenu;