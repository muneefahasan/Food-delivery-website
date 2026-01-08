import React, { useState, useEffect } from 'react';
import { GiChefToque, GiForkKnifeSpoon } from 'react-icons/gi';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import { FiHome, FiBook, FiStar, FiPhone, FiShoppingCart, FiLogOut, FiKey } from 'react-icons/fi';
import { useCart } from '../CartContext/CartContext';
import Login from './Login/Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItemCount } = useCart();

  const [showLoginModel, setShowLoginModel] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('loginData'))
  );

  useEffect(() => {
    if (location.pathname === '/login') {
      setShowLoginModel(true);
    } else {
      setShowLoginModel(false);
    }
    setIsAuthenticated(Boolean(localStorage.getItem('loginData')));
  }, [location]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginModel(false);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Extract Desktop Auth Button
  const renderDesktopAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className='px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-purple-600/40 transition-all transform hover:scale-[1.02] border-2 border-purple-600/20 flex items-center space-x-2 text-sm md:text-[15px] lg:text-base shadow-md shadow-purple-900/20'>
        <FiLogOut className='text-base md:text-lg lg:text-lg' />
        <span className='text-shadow'>Logout</span>
      </button>
    ) : (
      <button onClick={() => setShowLoginModel(true)}
        className='px-3 md:px-3 lg:px-3 py-1.5 lg:py-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-purple-600/40 transform hover:scale-[1.02] border-2 border-purple-600/20 flex items-center space-x-2 shadow-md shadow-purple-900/20 text-xs md:text-sm lg:text-sm' >
        <FiKey className='text-base md:text-lg lg:text-lg' />
        <span className='text-shadow'>Login</span>
      </button >
    );
  };

  // Extract Mobile Auth Button
  const renderMobileAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout} className='w-full px-4 py-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm'>
        <FiLogOut />
        <span>Logout</span>
      </button>
    ) : (
      <button
        onClick={() => {
          setShowLoginModel(true);
          setIsOpen(false);
        }} className='w-full px-4 py-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm' >
        <FiKey />
        <span>Login</span>
      </button >
    );
  };

  const navLinks = [
    { name: 'Home', to: '/', icon: <FiHome /> },
    { name: 'Menu', to: '/menu', icon: <FiBook /> },
    { name: 'About', to: '/about', icon: <FiStar /> },
    { name: 'Contact', to: '/contact', icon: <FiPhone /> },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 font-vibes overflow-x-hidden shadow-[0_25px_50px_-12px_rgba(147,51,234,0.3)]">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-purple-600/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-2" />

        <div className="flex justify-center items-center gap-4 py-2">
          <GiForkKnifeSpoon className="text-purple-500/40 -mt-4 -ml-2 rotate-45" size={32} />
          <GiForkKnifeSpoon className="text-purple-500/40 -mt-4 -mr-2 rotate-45" size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          <div className="flex-shrink-0 flex items-center space-x-2 relative md:-translate-x-4 lg:-translate-x-6 ml-2">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl opacity-50 transition-opacity duration-300" />
            <GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-purple-100 transition-all hover:rotate-12 hover:text-purple-400" />

            <div className="flex flex-col relative ml-2 max-w-[140px] lg:max-w-none">
              <NavLink
                to="/"
                className="text-2xl md:text-xl lg:text-4xl bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-monsieur tracking-wider truncate"
              >
                Foodie-Frenzy
              </NavLink>

              <div className="h-[3px] bg-gradient-to-r from-purple-600/30 via-purple-400/50 to-purple-600/30 mt-1 ml-1 shadow-[0_2px_5px] shadow-purple-500/30" />
            </div>
          </div>

          {/*DESKTOP NAVIGATION*/}

          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `group px-3 md:px-3 lg:px-4 py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative
                   transition-all duration-300 flex items-center hover:bg-purple-900/20 rounded-3xl border-2 
                    ${isActive ? 'border-purple-600/50 bg-purple-900/20 shadow-[inset_0_0_15px] shadow-purple-500/20'
                    : 'border-purple-900/30 hover:border-purple-600/50'
                  } shadow-md shadow-purple-900/20`
                }>

                <span className='mr-2 text-sm md:t-500 group-hover:text-purple-300 transition-all' >
                  {link.icon}
                </span>

                <span className='text-purple-100 group-hover:text-purple-300 relative'>
                  {link.name}</span>

                <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all
            group-hover:w-full'/>
              </NavLink>
            ))}


            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-3
      md:ml-3 lg:ml-6 mr-2 md:mr-3 lg:mr-4">

              <NavLink to='/cart' className='p-2 md:p-2 lg:p-3 text-purple-100 rounded-xl transition-all relative border-2 border-purple-900/30 hover:border-purple-600/50 group hover:bg-purple-900/20
        hover:shadow-lg hover:shadow-purple-500/30 shadow-md shadow-purple-900/20'>
                <FiShoppingCart className='text-base md:text-lg lg:text-lg' />
                {(totalItemCount && totalItemCount !== '0' && totalItemCount !== 0) && (
                  <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                    {totalItemCount}
                  </span>
                )}

              </NavLink>

              {renderDesktopAuthButton()}

            </div>
          </div>

          {/*MOBILE MENU*/}

          <div className="md:hidden flex items-center mr-2">
            <button className='text-purple-500 hover:text-purple-300 focus:outline-none transition-all
      p-2 rounded-xl  border-2  border-purple-900/30 hover:border-purple-600/50 relative shadow-md shadow-purple-900/20
       hover:shadow-lg hover:shadow-purple-500/30'

              onClick={() => setIsOpen(!isOpen)}>

              <div className='space-y-2 relative'>
                <span className={`block w-6 h-[2px] bg-current transition-all
            ${isOpen ? 'rotate-45  translate-y-[7px]' : ''
                  }`} />


                <span className={`block w-6 h-[2px] bg-current  ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[2px] bg-current transition-all
            ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''} `} />
              </div>

            </button>
          </div>
        </div>
      </div>

      {/*MOBILE Navigation*/}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t-4 border-purple-900/40 relative shadow-lg shadow-purple-900/30 w-full">
          <div className="px-4 py-4 space-y-2">

            {navLinks.map((link) => (
              <NavLink key={`mobile-${link.name}`}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm rounded-xl transition-all items-center ${isActive ? 'bg-purple-600/30' : ''
                  } border-2 ${isActive ? ' border-purple-600/50' : 'border-purple-900/30'}`}>

                <div className='flex items-center'>
                  <span className='mr-3 text-purple-500'>
                    {link.icon}
                  </span>
                  <span className='text-purple-100'>
                    {link.name}
                  </span>
                </div>
              </NavLink>
            ))}

            <div className="pt-4 border-t-2 border-purple-900/30 space-y-2">
              <NavLink to='/cart' onClick={() => setIsOpen(false)}
                className='w-full px-4 py-3 text-center text-purple-100 rounded-xl border-2 border-purple-900/30 hover:border-purple-600/50 flex
         items-center justify-center space-x-2 text-sm'>

                <FiShoppingCart className='text-lg' />
                {(totalItemCount && totalItemCount !== 0 && totalItemCount !== '0') && (
                  <span className='bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-2'>
                    {totalItemCount}
                  </span>
                )}
                <span>Cart</span>
              </NavLink>
              {renderMobileAuthButton()}
            </div>
          </div>
        </div>
      )}

      {/*Login model*/}

      {showLoginModel && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'>
          <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6
              w-full max-w-[480px] relative border-4 border-purple-700/30 shadow-[0_0_30px] shadow-purple-500/30'>
            <button onClick={() => setShowLoginModel(false)}
              className='absolute top-2 right-2 text-purple-500 hover:text-purple-300 text-2xl'>
              &times;
            </button>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 text-center '>
              Foodie-Frenzy
            </h2>
            <Login onLoginSuccess={handleLoginSuccess} onClose={() => setShowLoginModel(false)} />

          </div>
        </div>
      )
      }
    </nav>
  )
}

export default Navbar;
