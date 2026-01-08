import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiMapPin, FiPhone, FiGlobe, FiMail, FiMessageSquare, FiArrowRight, FiUser, FiAtSign } from "react-icons/fi";
import { contactFormFields } from '../../assets/dummydata';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', address: '', dish: '', query: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        toast.success('Your query has been submitted successfully!', {
            style: {
                border: '2px solid #a855f7', padding: '16px', color: '#fff',
                background: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(10px)'
            },
            iconTheme: { primary: '#a855f7', secondary: '#fff' },
        });

        setFormData({ name: '', phone: '', email: '', address: '', dish: '', query: '' });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 animate-gradient-x py-12
        sm:py-16 md:py-20 px-4 sm:px-8 font-poppins relative overflow-hidden text-white'>
            <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 4000 }} />
            {/*ADDITIONAL DECORATIVE ELEMENTS */}
            <div className='absolute top-20 left-10 w-24 h-24 bg-purple-500/20 rounded-full animate-float' />
            <div className='absolute bottom-40 right-20 w-16 h-16 bg-indigo-500/20 rounded-full animate-float-delayed' />

            <div className='max-w-7xl mx-auto relative z-10'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300'>
                        Connect With Us
                    </span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    {/*CONTACT INFO SECTION*/}

                    <div className='space-y-6'>
                        <div className='relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-purple-500 hover:border-purple-400 group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />

                            <div className='flex items-center mb-4 relative z-10'>
                                <div className='p-3 bg-gradient-to-br from-purple-500/30 to-purple-700/30 rounded-xl'>
                                    <FiMapPin className='text-purple-400 text-2xl animate-pulse' />
                                </div>

                                <div className='ml-4 text-purple-100 text-xl font-semibold'>
                                    <h3>Our Headquarters</h3>
                                </div>
                            </div>

                            <div className='pl-12 relative z-10'>
                                <p className='text-purple-100 font-light text-lg'>
                                    Lucknow, UP
                                </p>
                            </div>
                        </div>

                        <div className='relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-teal-500 hover:border-teal-400 group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />

                            <div className='flex items-center mb-4 relative z-10'>
                                <div className='p-3 bg-gradient-to-br from-teal-500/30 to-teal-700/30 rounded-xl'>
                                    <FiPhone className='text-teal-400 text-2xl animate-ping' />
                                </div>

                                <div className='ml-4 text-purple-100 text-xl font-semibold'>
                                    <h3>Contact Number</h3>
                                </div>
                            </div>

                            <div className='pl-12 relative z-10'>
                                <p className='text-purple-100 font-light flex items-center'>
                                    <FiGlobe className='text-teal-400 text-xl mr-2' />
                                    077*********
                                </p>
                            </div>
                        </div>

                        <div className='relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-indigo-500 hover:border-indigo-400 group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />

                            <div className='flex items-center mb-4 relative z-10'>
                                <div className='p-3 bg-gradient-to-br from-indigo-500/30 to-indigo-700/30 rounded-xl'>
                                    <FiMail className='text-indigo-400 text-2xl animate-pulse' />
                                </div>

                                <div className='ml-4 text-indigo-100 text-xl font-semibold'>
                                    <h3>Email Address</h3>
                                </div>
                            </div>

                            <div className='pl-12 relative z-10'>
                                <p className='text-indigo-100 font-light text-lg'>
                                    hexagonsservices@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM*/}
                    <div className='relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-slide-in-right border-2
                    border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300'>
                        <div className='absolute -top-4 -right-4 w-12 h-12 bg-purple-500/30 rounded-full animate-ping-slow' />

                        <form onSubmit={handleSubmit} className='space-y-6 relative z-10'>
                            {contactFormFields && contactFormFields.map(({ label, name, type, placeholder, pattern, iconName }) => {
                                let IconComp = FiUser;
                                if (name === 'email') IconComp = FiAtSign;
                                if (name === 'phone') IconComp = FiPhone;

                                return (
                                    <div key={name}>
                                        <label className='block text-purple-100 text-sm font-medium mb-2'>
                                            {label}
                                        </label>

                                        <div className='relative'>
                                            <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                                                <IconComp className='text-purple-500 text-xl animate-pulse' />
                                            </div>
                                            <input type={type} name={name} value={formData[name]} onChange={handleChange}
                                                className='w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded text-purple-50 focus:ring-2 focus:ring-purple-500
                                         focus:border-transparent placeholder-purple-200/50 outline-none'
                                                placeholder={placeholder} pattern={pattern} required />
                                        </div>
                                    </div>
                                )
                            })}

                            {!contactFormFields && (
                                <>
                                    {['name', 'email'].map(field => (
                                        <div key={field}>
                                            <label className='block text-purple-100 text-sm font-medium mb-2 capitalize'>{field}</label>
                                            <input name={field} value={formData[field]} onChange={handleChange} className='w-full p-2 rounded bg-white/10' required />
                                        </div>
                                    ))}
                                </>
                            )}


                            <div>
                                <label className='block text-purple-200 text-sm font-medium mb-2'>
                                    Your query
                                </label>
                                <div className='relative'>
                                    <div className='absolute left-3 top-4'>
                                        <FiMessageSquare className='text-purple-500 text-xl animate-pulse' />
                                    </div>
                                    <textarea rows='4' name='query' value={formData.query} onChange={handleChange}
                                        className='w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded text-purple-50 focus:ring-2 focus:ring-purple-500
                                         focus:border-transparent placeholder-purple-200/50 outline-none'
                                        placeholder='Type your message here....' required>
                                    </textarea>
                                </div>
                            </div>

                            <button type='submit' className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                            rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/20 py-3 flex items-center
                            justify-center space-x-2 group text-white font-bold'>
                                <span>Submit Query</span>
                                <FiArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;