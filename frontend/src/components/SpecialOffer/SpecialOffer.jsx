import React, { useState } from 'react';
import { cardData, additionalData } from '../../assets/dummydata';
import { useCart } from '../../CartContext/CartContext';
import { FaStar, FaHeart, FaFire, FaPlus } from 'react-icons/fa';
import { HiMinus, HiPlus } from 'react-icons/hi';
import FloatingParticle from '../FloatingParticle/FloatingParticle';

const SpecialOffer = () => {
    const [showAll, setShowAll] = useState(false);
    const initialData = [...cardData, ...additionalData];
    const { addToCart, updateItemQuantity, removeFromCart, cartItems } = useCart();

    return (
        <div className='bg-gradient-to-b from-gray-950 to-gray-900 py-16 px-4 font-poppins text-white'>
            <div className='max-w-7xl mx-auto'>

                <div className='text-center mb-14'>
                    <h1 className='text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text
                    text-transparent font-playfair italic'>
                        Today's <span className='text-purple-400'> Special </span> Offers
                    </h1>
                    <p className='text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed'>
                        Savor the extraordinary with our culinary masterpieces crafted to perfection.
                    </p>
                </div>

                {/*PRODUCT CARD*/}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {(showAll ? initialData : initialData.slice(0, 4)).map((item, index) => {
                        const cartItem = cartItems.find(ci => ci.id === item.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        const handleAddToCart = () => {
                            const priceVal = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                            addToCart({ ...item, price: priceVal }, 1);
                        };

                        return (
                            <div key={`${item.id}-${index}`} className='relative group bg-gray-800 rounded-3xl 
                            overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500
                            hover:shadow-purple-900/40 border-2 border-transparent hover:border-purple-500/20 before:absolute
                            before:inset-0 hover:before:opacity-20'>

                                <div className='relative h-72 overflow-hidden'>
                                    <img src={item.image} alt={item.title} className='w-full h-full object-cover brightness-90 object-top
                                group-hover:brightness-110 transition-all duration-500'/>
                                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent
                                to-black/90'/>
                                    <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center
                                bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full'>

                                        <span className='flex items-center gap-2 text-purple-400'>
                                            <FaStar className='text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]' />
                                            <span className='font-bold'> {item.rating}</span>
                                        </span>
                                        <span className='flex items-center gap-2 text-pink-400'>
                                            <FaHeart className='text-xl animate-pulse' />
                                            <span className='font-bold'> {item.hearts}</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='p-6 relative z-10'>
                                    <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent font-playfair italic'>{item.title}</h3>

                                    <p className='text-gray-300 mb-5 text-sm leading-relaxed tracking-wide'>{item.description}</p>

                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='text-2xl font-bold text-purple-400 flex-1'>{item.price}</span>
                                        {cartItem ? (
                                            <div className='flex items-center gap-3'>
                                                <button onClick={() => {
                                                    quantity > 1 ? updateItemQuantity(item.id, quantity - 1)
                                                        : removeFromCart(item.id)
                                                }}
                                                    className='w-8 h-8 rounded-full bg-purple-900/40 flex items-center justify-center hover:bg-purple-800/50 transition-all duration-200 active:scale-95 border border-purple-500/30'>
                                                    <HiMinus className='text-purple-100' />
                                                </button>

                                                <span className='w-8 text-center text-purple-100 font-cinzel'>
                                                    {quantity}
                                                </span>
                                                <button onClick={() => updateItemQuantity(item.id, quantity + 1)}
                                                    className='w-8 h-8 rounded-full bg-purple-900/40 flex items-center justify-center hover:bg-purple-800/50 transition-all duration-200 active:scale-95 border border-purple-500/30'>
                                                    <HiPlus className='w-4 h-4 text-purple-100' />
                                                </button>
                                            </div>
                                        ) : (
                                            <button onClick={handleAddToCart}
                                                className='relative overflow-hidden group/btn px-4 py-2 rounded-lg'>
                                                <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                                                <div className='flex items-center gap-2 relative z-10 text-purple-300 group-hover/btn:text-purple-100'>
                                                    <FaPlus className='text-lg transition-transform' />
                                                    <span>Add</span>
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className='absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent
                                        group-hover:border-purple-500/30 transition-all duration-500'/>
                                <div className='opacity-0 group-hover:opacity-100 pointer-events-none'>
                                    <FloatingParticle />
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className='mt-12 flex justify-center'>
                    <button onClick={() => setShowAll(!showAll)}
                        className='flex items-center gap-3 bg-gradient-to-r from-pink-700 to-purple-700
        text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider hover:gap-4 hover:scale-105
        hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group border-2 border-purple-400/20 overflow-hidden relative'>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        <FaFire className='text-xl animate-pulse relative z-10' />
                        <span className='relative z-10'>{showAll ? 'Show Less' : 'Show More'}</span>
                        <div className='h-full w-1 bg-purple-400/30 absolute right-0 top-0 group-hover:animate-pulse' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer;