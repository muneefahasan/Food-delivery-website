import React, { useState } from 'react';
import { GiChefToque, GiForkKnifeSpoon } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBook, FiStar, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/', icon: <FiHome /> },
    { name: 'Menu', to: '/menu', icon: <FiBook /> },
    { name: 'About', to: '/about', icon: <FiStar /> },
    { name: 'Contact', to: '/contact', icon: <FiPhone /> },
  ];

  return (
    <nav className="bg-[#2D1B0E] sticky top-0 z-50 font-vibes overflow-x-hidden shadow-[0_25px_50px_-12px_rgba(218,165,32,0.3)]">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent shadow-[0_0_20px_rgba(255,191,0,0.3)] mb-2" />

        <div className="flex justify-center items-center gap-4 py-2">
          <GiForkKnifeSpoon className="text-amber-500/40 -mt-4 -ml-2 rotate-45" size={32} />
          <GiForkKnifeSpoon className="text-amber-500/40 -mt-4 -mr-2 rotate-45" size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          <div className="flex-shrink-0 flex items-center space-x-2 relative md:-translate-x-4 lg:-translate-x-6 ml-2">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-50 transition-opacity duration-300" />
            <GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-amber-50 transition-all hover:rotate-12 hover:text-amber-400" />

            <div className="flex flex-col relative ml-2 max-w-[140px] lg:max-w-none">
              <NavLink
                to="/"
                className="text-2xl md:text-xl lg:text-4xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent font-monsieur tracking-wider truncate"
              >
                Foodie-Frenzy
              </NavLink>

              <div className="h-[3px] bg-gradient-to-r from-amber-600/30 via-amber-400/50 to-amber-600/30 mt-1 ml-1 shadow-[0_2px_5px] shadow-amber-500/30" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `group px-3 md:px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base relative transition-all duration-300 flex items-center gap-2 rounded-3xl border-2 ${
                    isActive
                      ? 'border-amber-600/50 bg-amber-900/10 shadow-[inset_0_0_15px] shadow-amber-500/20'
                      : 'border-amber-900/30 hover:border-amber-600/50'
                  }`
                }
              >
                <span className="text-amber-300">{link.icon}</span>
                <span className="hidden lg:inline">{link.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-amber-200 border border-amber-700/30"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={`mobile-${link.name}`}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-amber-100 hover:bg-amber-700/20"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
