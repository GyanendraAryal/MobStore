import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <section className="py-12 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <img 
            src="https://picsum.photos/seed/customad/1200/400" 
            alt="Promotional banner for mobile phones" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
              Unlock Exclusive Deals!
            </h3>
            <p className="text-md md:text-lg text-gray-200 max-w-xl mb-6">
              Get up to <span className="text-green-400 font-bold">30% OFF</span> on select devices this weekend only. Don't miss out!
            </p>
            <a 
              href="#products" 
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;