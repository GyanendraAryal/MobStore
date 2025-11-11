
import React from 'react';

export const ChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="6" y1="6" x2="6" y2="6"></line>
    <line x1="18" y1="6" x2="18" y2="6"></line>
    <line x1="6" y1="18" x2="6" y2="18"></line>
    <line x1="18" y1="18" x2="18" y2="18"></line>
  </svg>
);
