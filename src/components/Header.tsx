"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const socialLinks = [
    { href: 'https://twitter.com/catcaketoke', icon: FaXTwitter, label: 'Twitter' },
    { href: 'https://t.me/catcaketokencct', icon: FaTelegram, label: 'Telegram' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#howtobuy', label: 'How to buy' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-16 py-3 bg-yellow-500 border-b-2 border-yellow-200 text-black">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.jpg" alt='pcat logo' width={50} height={50} className='rounded-2xl' />
          <p className='text-2xl font-semibold'>CatCake</p>
        </div>
        
        {/* Navigation Center */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="hover:text-yellow-400 transition-colors "
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center  rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,1,0)] hover:-translate-y-[1px] active:translate-y-0 transition-transform text-white"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-black" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop - clickable to close menu */}
        <div 
          className="absolute inset-0 bg-yellow-400 backdrop-blur-sm"
          onClick={toggleMenu}
          aria-label="Close menu"
        />
        
        {/* Menu Content */}
        <nav className={`relative z-10 flex flex-col items-center justify-center h-screen space-y-8 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black text-2xl hover:text-yellow-400 transition-colors"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform text-black"
                aria-label={social.label}
                onClick={toggleMenu}
              >
                <social.icon className="w-6 h-6 text-black" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;