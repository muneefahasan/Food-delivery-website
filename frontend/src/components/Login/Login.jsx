import React, { useEffect, useState } from 'react';
import { FaUser, FaCheckCircle, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { iconClass, inputBase } from '../../assets/dummydata';

const Login = ({ onLoginSuccess = () => { }, onClose = () => { } }) => {
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('loginData');
        if (stored) {
            try {
                setFormData(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse login data", e);
            }
        }
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        if (formData.rememberMe) {
            localStorage.setItem('loginData', JSON.stringify(formData));
        } else {
            localStorage.removeItem('loginData');
        }
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            onLoginSuccess();
            navigate('/'); // Navigate to home after login
        }, 2000);
    }

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }

    const toggleShowPassword = () => setShowPassword(prev => !prev);


    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-950 p-4'>
            <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
                <div className='bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm'>
                    <FaCheckCircle className='flex-shrink-0' />
                    <span>Login successful</span>
                </div>
            </div>

            <div className='w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border-2 border-purple-900/50 transform transition-all duration-300 hover:shadow-purple-900/20 hover:shadow-2xl'>
                <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6'>
                    Welcome Back
                </h1>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='relative'>
                        <FaUser className={iconClass} />
                        <input type="text" name='username' placeholder='Username' value={formData.username}
                            onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`} required />
                    </div>
                    <div className='relative'>
                        <FaLock className={iconClass} />
                        <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' value={formData.password}
                            onChange={handleChange} className={`${inputBase} pl-10 pr-4 py-3`} required />
                        <button type='button' onClick={toggleShowPassword} className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-purple-400'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className='flex items-center'>
                        <label className='flex items-center cursor-pointer'>
                            <input type='checkbox' name='rememberMe' checked={formData.rememberMe}
                                onChange={handleChange} className='h-5 w-5 text-purple-600 bg-gray-800 border-purple-400 focus:ring-purple-600 rounded' />
                            <span className='ml-2 text-purple-100'>Remember Me</span>
                        </label>
                    </div>

                    <button type='submit' className='w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-purple-900/30'>
                        Sign In <FaArrowRight />
                    </button>
                </form>

                <div className='mt-6 text-center'>
                    <Link to='/signup' onClick={onClose} className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors'>
                        <FaUserPlus /> Create New Account
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login;
