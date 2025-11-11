
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-80 z-10"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Find Your Next Phone
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          The best deals on the latest smartphones, with instant purchase via WhatsApp.
        </p>
        <a 
          href="#products" 
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
