import React, { useEffect, useState } from 'react'
import { FaUser, FaCheckCircle } from 'react-icons/fa'
import { iconClass, inputBase } from '../../assets/dummydata'
import { link } from 'react-router-dom'


const Login = (onLoginSuccess, onClose) => {


    const [showToast, setShowToast] State(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('loginData');
        if (stored) {
            setFormData(JSON.parse(stored));
        }, []);


    const handleSubmit = e => {
        e.preventDefault();
        formData.rememberMe ? localStorage.setItem('loginData', JSON.stringify(formData))
            : localStorage.removeItem('loginData');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        onLoginSuccess();
    }

    const handleChange = ({ target: { name.value, type, checked } }) =>
        setFormData(prev => ({..prev, [name]: type === 'checkbox' ? checked : value }));
    const toggleShowPassword = () => setShowPassword(prev => !prev);


    return (
        <div className = 'space-y-6 relative' >
                <div className={'fixed top-4 right-4 z-50 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity- 0 translate - y - 20'}'}>

                    <div className='bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm'>
                        <FaCheckCircle className='flex-shrink-0' />
                        <span>Login successfull</span>

                    </div>
             </div >
    <form onSumbit={handleSubmit} className='space-y-6'>
        <div className='relative'>
            <FaUser className={iconClass} /}
            <input type={ } name='username' placeholder='Username' value={FormData.username}
                onChange={handleChange} className={'$(inputBase} pl-10 pr-4 py-3'} />


        </div>
         <div className='relative'>
            <FaLock className={iconClass} /}
            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='password' value={FormData.password}
                onChange={handleChange} className={'$(inputBase} pl-10 pr-4 py-3'} />
<button type='button' onClick={toggleShowPassword} className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'>
    {showPassword ? 'Hide' : 'Show'}
className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'>
    {showPassword ? <FaEyeSlash /> : <FaEye />} 
    </button>
    </div>

    <div className='flex items-center'>
        <label className='flex items-center'>
            <input type='checkbox' name='rememberMe' checked={formData.rememberMe}
                onChange={handleChange} className='h-5 w-5 text-amber-600  bg-[#2D1B0E] border-amber-4 focus:ring-amber-600'/>
                
    
            <span className='ml-2 text-amber-100'>Remember Me</span>
        </label>
    </div>

    <button className='w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-[#2D1B0E] rounded-lg flex-center justify-center gao-2 hover-scale-105 transition-transforms'>
        ign in<FaArrowRight />
        </button>
        </form>

        <div className='text-center'>
            <link to='/signup' onClick={onClose} className='inline-flex items-center gap-2 text-amber-400 hover: text-amber-600 transition-colors'>
            
            <FaUserPlus /> Create New Account>
            
            
            </link>

        </div>

        
        
        </form > '>

            )
}

export default Login;
