import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const AwesomeToast = ({ message, icon }) => (
    <div className='animate-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-br from-purple-500 to-indigo-600 px-6 py-4 rounded-lg shadow-lg border-2 border-purple-400/20 z-50 text-white'>
        <span className='text-2xl mr-3'>{icon}</span>
        <span className='font-semibold'>{message}</span>
    </div>
);

const SignUp = () => {
    const [showToast, setShowToast] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    //FOR TOAST
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
                navigate('/login');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showToast, navigate]);

    const toggleShowPassword = () => setShowPassword(prev => !prev);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Sign Up Data:', formData);
        // Here you can add logic to handle sign up (e.g., API call)
        setShowToast(true);
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-950 p-4'>
            {showToast && <AwesomeToast message="Sign up successful" icon={<FaCheckCircle />} />}

            <div className='w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border-2 border-purple-900/50 transform transition-all duration-300 hover:shadow-purple-900/20 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-400
            bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform'>
                    Create Account</h1>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type="text" name="username" placeholder="Username" value={formData.username}
                        onChange={handleChange}
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 text-purple-100 placeholder-purple-400/50 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 hover:scale-[1.02]' required />

                    <input type="email" name="email" placeholder="Email" value={formData.email}
                        onChange={handleChange}
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 text-purple-100 placeholder-purple-400/50 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 hover:scale-[1.02]' required />

                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password}
                            onChange={handleChange}
                            className='w-full px-4 py-3 rounded-lg bg-gray-900 text-purple-100 placeholder-purple-400/50 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 hover:scale-[1.02]' required />

                        <button className='absolute inset-y-0 right-4 flex items-center pr-3 text-purple-400 hover:text-purple-300 transform hover:scale-125' type='button' onClick={toggleShowPassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                    </div>


                    <button type='submit' className='w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-900/30'>
                        Sign Up
                    </button>
                </form>

                <div className='mt-6 text-center'>
                    <Link to='/login' className='group inline-flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300'>
                        <FaArrowLeft className='mr-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300' />
                        <span className='transform group-hover:-translate-x-2 transition-all duration-300'>
                            Back to Login
                        </span>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default SignUp;
