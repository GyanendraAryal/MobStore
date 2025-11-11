import React from 'react';
import type { Phone } from '../types';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { ChipIcon } from './icons/ChipIcon';
import { MemoryIcon } from './icons/MemoryIcon';
import { CameraIcon } from './icons/CameraIcon';
import { StorageIcon } from './icons/StorageIcon';


interface ProductCardProps {
  phone: Phone;
  adminPhoneNumber: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ phone, adminPhoneNumber }) => {
  const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=Hi%2C%20I%20want%20to%20buy%20${encodeURIComponent(phone.name)}`;

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 flex flex-col group">
      <div className="relative aspect-square overflow-hidden">
        <img src={phone.imageUrl} alt={phone.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
            >
                <WhatsappIcon className="w-5 h-5 mr-2" />
                Buy Now
            </a>
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{phone.name}</h3>
        
        <ul className="text-sm text-gray-400 space-y-2 mb-4">
          <li className="flex items-center"><ChipIcon className="w-4 h-4 mr-2 text-green-400" /> {phone.specs.processor}</li>
          <li className="flex items-center"><MemoryIcon className="w-4 h-4 mr-2 text-green-400" /> {phone.specs.ram} RAM</li>
          <li className="flex items-center"><StorageIcon className="w-4 h-4 mr-2 text-green-400" /> {phone.specs.storage} Storage</li>
          <li className="flex items-center"><CameraIcon className="w-4 h-4 mr-2 text-green-400" /> {phone.specs.camera} Camera</li>
        </ul>

        <div className="mt-auto">
          <p className="text-2xl sm:text-3xl font-extrabold text-green-400">${phone.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;