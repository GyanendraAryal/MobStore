import React from 'react';
import { CloseIcon } from './icons/CloseIcon';

interface AnnouncementBarProps {
  text: string;
  onClose: () => void;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ text, onClose }) => {
  return (
    <div className="relative bg-green-500 text-white text-center py-2 px-4 sm:px-6 lg:px-8">
      <p className="font-semibold">{text}</p>
      <button 
        onClick={onClose} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:bg-green-600 rounded-full p-1 transition-colors"
        aria-label="Dismiss announcement"
      >
        <CloseIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
