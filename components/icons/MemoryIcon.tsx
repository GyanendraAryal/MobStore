
import React from 'react';

export const MemoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M2 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
    <path d="M6 11h2"></path><path d="M10 11h2"></path>
    <path d="M14 11h2"></path><path d="M6 15h2"></path>
    <path d="M10 15h2"></path><path d="M14 15h2"></path>
  </svg>
);
