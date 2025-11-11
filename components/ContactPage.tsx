import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

interface ContactPageProps {
  adminPhoneNumber: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ adminPhoneNumber }) => {
  const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=Hi%2C%20I%20have%20a%20question.`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-green-500 pb-4 inline-block">
            Contact Us
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-6">
              Have questions or need support? Reach out to us directly on WhatsApp for a quick response. We're here to help!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <WhatsappIcon className="w-6 h-6 mr-3" />
              Chat on WhatsApp
            </a>
            <div className="mt-8 text-gray-400 space-y-3 pt-6 border-t border-slate-700">
               <p><strong className="text-white font-semibold">Email:</strong> contact@mobilestore.dev</p>
               <p><strong className="text-white font-semibold">Hours:</strong> Mon-Fri, 9am - 6pm PST</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Send Us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" required placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" required placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" required placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;