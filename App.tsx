import React, { useState, useMemo } from 'react';
import type { Phone } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { SearchIcon } from './components/icons/SearchIcon';
import AnnouncementBar from './components/AnnouncementBar';
import AdBanner from './components/AdBanner';
import LocationMap from './components/LocationMap';
import AboutSection from './components/AboutSection';

// Demo content: phone listings
const samplePhones: Phone[] = [
  {
    id: 1,
    name: "Pixel Pro 9",
    brand: "Google",
    price: 999,
    imageUrl: "https://picsum.photos/seed/pixel9/600/600",
    specs: {
      processor: "Tensor G4",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Triple",
    },
  },
  {
    id: 2,
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    price: 1799,
    imageUrl: "https://picsum.photos/seed/galaxyfold/600/600",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "512GB",
      camera: "108MP Penta",
    },
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 1199,
    imageUrl: "https://picsum.photos/seed/iphone16/600/600",
    specs: {
      processor: "A18 Bionic",
      ram: "8GB",
      storage: "512GB",
      camera: "48MP Pro",
    },
  },
   {
    id: 4,
    name: "Aether One",
    brand: "Aether",
    price: 799,
    imageUrl: "https://picsum.photos/seed/aether/600/600",
    specs: {
      processor: "Orion 7",
      ram: "8GB",
      storage: "128GB",
      camera: "64MP Dual",
    },
  },
  {
    id: 5,
    name: "Pixel 9",
    brand: "Google",
    price: 799,
    imageUrl: "https://picsum.photos/seed/pixel9base/600/600",
    specs: {
      processor: "Tensor G4",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP Dual",
    },
  },
  {
    id: 6,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    imageUrl: "https://picsum.photos/seed/s24ultra/600/600",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP Quad",
    },
  },
  {
    id: 7,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 1399,
    imageUrl: "https://picsum.photos/seed/xiaomi14/600/600",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "512GB",
      camera: "50MP Quad Leica",
    },
  },
];

// Admin's WhatsApp number. Replace with a real number.
const ADMIN_WHATSAPP_NUMBER = "11234567890"; // Example: 1 for country code, followed by number

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isBarVisible, setIsBarVisible] = useState(true);

  const filteredPhones = useMemo(() => {
    return samplePhones.filter(phone =>
      phone.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      {isBarVisible && (
        <AnnouncementBar 
          text="Special Offer! Get 20% off on all Samsung phones this week!" 
          onClose={() => setIsBarVisible(false)} 
        />
      )}
      <Header />
      <AdBanner />
      <main>
        <Hero />
        <section id="products" className="py-16 sm:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white border-l-4 border-green-400 pl-4 mb-6 md:mb-0">
                Our Collection
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 bg-slate-800 border border-slate-700 text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {filteredPhones.length > 0 ? (
              <ProductGrid phones={filteredPhones} adminPhoneNumber={ADMIN_WHATSAPP_NUMBER} />
            ) : (
              <div className="text-center text-gray-400 py-16">
                <p className="text-xl">No phones found matching your search.</p>
              </div>
            )}
          </div>
        </section>
        <AboutSection />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default App;