import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-800/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-green-500 pb-4 inline-block">
          About Our Store
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Welcome to MobileStore, your one-stop shop for the latest and greatest in mobile technology. Our mission is to provide top-tier smartphones at competitive prices, paired with an unbeatable customer experience. We believe in making technology accessible, which is why we've streamlined our purchasing process with direct WhatsApp support.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
