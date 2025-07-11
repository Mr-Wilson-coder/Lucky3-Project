import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCountdown } from '../hooks/useCountdown';

const Header = () => {
  const countdown = useCountdown(3, 22);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/results', label: 'RESULTS' },
    { path: '/winners', label: 'WINNERS' },
    { path: '/how-to-play', label: 'HOW TO PLAY' },
    { path: '/terms', label: 'TERMS & CONDITIONS' },
    { path: '/contact', label: 'CONTACTS' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-2">
              <h1 className="text-xl md:text-2xl font-bold">LUCKY 3</h1>
            </div>
            <div className="hidden sm:block">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-2 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold">
                DRAW IN {String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`hover:text-amber-300 transition-colors font-medium text-sm xl:text-base ${
                  isActive(link.path) ? 'text-amber-300' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Countdown (visible on small screens) */}
        <div className="sm:hidden mt-3 text-center">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            DRAW IN {String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
          </span>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`hover:text-amber-300 transition-colors font-medium text-center py-2 px-4 rounded-md hover:bg-white/10 ${
                    isActive(link.path) ? 'text-amber-300 bg-white/10' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
