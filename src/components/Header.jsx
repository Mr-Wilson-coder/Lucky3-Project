import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCountdown } from '../hooks/useCountdown';

const Header = () => {
  const countdown = useCountdown(3, 22);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/results', label: 'RESULTS' },
    { path: '/winners', label: 'WINNERS' },
    { path: '/how-to-play', label: 'HOW TO PLAY' },
    { path: '/terms', label: 'TERMS & CONDITIONS' },
    { path: '/contact', label: 'CONTACTS' },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <h1 className="text-2xl font-bold">LUCKY 3</h1>
            </div>
            <div className="hidden md:block">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold">
                DRAW IN {String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`hover:text-amber-300 transition-colors font-medium ${
                  isActive(link.path) ? 'text-amber-300' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
