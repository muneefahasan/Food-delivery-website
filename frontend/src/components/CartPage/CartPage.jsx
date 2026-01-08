import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext/CartContext';
import { FaMinus, FaPlus, FaTrash, FaTimes } from "react-icons/fa";

const CartPage = () => {
    const { cartItems, removeFromCart, updateItemQuantity, totalCost } = useCart();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className='min-h-screen overflow-x-hidden py-16 px-4 sm:px-8 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in-down'>
                    <span className='font-dancingScript block text-5xl sm:text-6xl md:text-7xl mb-2 bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent'>
                        Your Cart
                    </span>
                </h1>
                {cartItems.length === 0 ? (
                    <div className='text-center animate-fade-in'>
                        <p className='text-purple-100/80 text-xl mb-4'>
                            Your cart is empty</p>
                        <Link to='/menu' className='transition-all duration-300 text-purple-100 inline-flex items-center gap-2 hover:gap-3 
                        hover:bg-purple-800/50 bg-purple-900/40 px-6 py-2 rounded-full font-cinzel text-uppercase border border-purple-500/30'>
                            Browse All Items
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {cartItems.map((item) => (
                                <div key={item.id}
                                    className='group bg-purple-900/10 p-4 rounded-2xl border-2 border-dashed border-purple-500/50 backdrop-blur-sm flex flex-col items-center gap-4 
                        transition-all duration-300 hover:border-solid hover:shadow-xl hover:shadow-purple-900/20 hover:bg-purple-900/20
                        transform hover:-translate-y-1 animate-fade-in'>

                                    <div className='w-24 h-24 flex-shrink-0 cursor-pointer relative overflow-hidden rounded-lg transition-transform duration-300'
                                        onClick={() => setSelectedImage(item.image)}>
                                        <img src={item.image} alt={item.name} className='w-full h-full object-contain' />
                                    </div>

                                    <div className='w-full text-center'>
                                        <h3 className='text-xl font-dancingScript text-purple-100'>
                                            {item.name}
                                        </h3>
                                        <p className='text-purple-100/80 font-cinzel mt-1'> {item.price}</p>

                                    </div>

                                    <div className='flex items-center gap-3 '>
                                        <button onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            className='w-8 h-8  rounded-full bg-purple-900/40 flex items-center justify-center transition-all duration-200 active:scale-95 border border-purple-500/30'>

                                            <FaMinus className='w-3 text-center text-purple-100 font-cinzel' />

                                        </button>
                                        <span className='w-8 text-center text-purple-100 font-cinzel'>
                                            {item.quantity}
                                        </span>

                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            className='w-8 h-8  rounded-full bg-purple-900/40 flex items-center justify-center transition-all duration-200 active:scale-95 border border-purple-500/30'>

                                            <FaPlus className='w-3 text-center text-purple-100 font-cinzel' />
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-between w-full'>
                                        <button onClick={() => removeFromCart(item.id)}
                                            className='bg-purple-900/30 px-3 py-1 rounded-full font-cinzel text-xs uppercase transition-all duration-300 hover:bg-red-900/50 flex items-center gap-1 active:scale-95 border border-purple-500/20 hover:border-red-500/30'>
                                            <FaTrash className='w-4 h-4 text-purple-100 group-hover:text-red-300' />
                                            <span className='text-purple-100 group-hover:text-red-300'>Remove </span>
                                        </button>
                                        <p className='text-sm font-dancingScript text-purple-300'>
                                            {(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-12 pt-8 border-t border-purple-800/30 animate-fade-in-up'>
                            <div className='flex flex-col sm:flex-row justify-between items-center gap-8'>
                                <Link to='/menu' className='bg-purple-900/40 px-8 py-3 rounded-full font-cinzel uppercase
                                    tracking-wider hover:bg-purple-800/50  transition-all duration-300 text-purple-100 inline-flex items-center gap-2 hover:gap-3 
                                    active:scale-95 border border-purple-500/30'>
                                    Continue Shopping
                                </Link>

                                <div className='flex items-center gap-8'>
                                    <h2 className='text-3xl font-dancingScript text-purple-100'>
                                        Total: {totalCost}
                                    </h2>

                                    <button className='bg-purple-600 px-8 py-3 rounded-full font-cinzel uppercase
                                        tracking-wider hover:bg-purple-500  transition-all duration-300 text-white flex items-center gap-2 
                                        active:scale-95 shadow-lg shadow-purple-900/30'>
                                        Checkout Now
                                    </button>

                                </div>

                            </div>
                        </div>

                    </>
                )}
            </div>

            {selectedImage && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 bg-opacity-75 backdrop-blur-sm p-4
        overflow-auto'
                    onClick={() => setSelectedImage(null)}>
                    <div className='relative max-w-full max-h-full'>
                        <img src={selectedImage} alt="full view" className='max-w-[90vw] max-h-[90vh] rounded-lg object-contain' />

                        <button onClick={() => setSelectedImage(null)}
                            className='absolute top-1 right-1 bg-purple-900/80 rounded-full p-2 text-white hover:bg-purple-800 duration-300 active:scale-90'>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div >
    )
}

export default CartPage;