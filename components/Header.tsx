import React, { useState, useEffect } from 'react';
import { SmartphoneIcon } from './icons/SmartphoneIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#'); // State for scrollspy

  // Effect for scrollspy
  useEffect(() => {
    const sections = ['products', 'about', 'contact']; // IDs of the sections to track
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      // Determine which link to highlight
      let currentSection = '#';

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          // Offset to trigger the highlight a bit earlier
          const sectionTop = section.offsetTop - 100; 
          if (scrollY >= sectionTop) {
            currentSection = `#${id}`;
          }
        }
      }
      
      // Special check for bottom of page to ensure 'Contact' is highlighted
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = '#contact';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        {/* Top row for logo and mobile menu button */}
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <SmartphoneIcon className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">MobileStore</span>
          </a>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Nav - Centered, below logo, and spread out */}
        <div className="hidden md:flex justify-around items-center w-full pt-4">
          {navLinks.map(({ href, label }) => (
            <a 
              key={href} 
              href={href} 
              className={`transition-colors text-lg font-medium px-4 py-2 rounded-md ${activeLink === href ? 'text-green-400' : 'text-gray-300 hover:text-green-400'}`}
            >
              {label}
            </a>
          ))}
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navLinks.map(({ href, label }) => (
              <a 
                key={href}
                href={href} 
                className="block py-2 px-4 text-sm text-gray-300 hover:bg-slate-800 rounded" 
                onClick={handleLinkClick}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;