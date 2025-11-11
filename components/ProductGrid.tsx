import React from 'react';
import type { Phone } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  phones: Phone[];
  adminPhoneNumber: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ phones, adminPhoneNumber }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {phones.map((phone) => (
        <ProductCard key={phone.id} phone={phone} adminPhoneNumber={adminPhoneNumber} />
      ))}
    </div>
  );
};

export default ProductGrid;