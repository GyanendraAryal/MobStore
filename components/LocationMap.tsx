import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-green-500 pb-4 inline-block">
            Our Location
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Visit us in-store to get a hands-on experience with the latest devices.
          </p>
        </div>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border-4 border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.296803939635!2d-73.98822938459393!3d40.7553659793272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c65ae62d%3A0x82a57e2a962a98f!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678886 Times Square, New York, NY"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;