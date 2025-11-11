import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} React MobileStore. All rights reserved.</p>
        <p className="text-sm mt-1">A demo built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;