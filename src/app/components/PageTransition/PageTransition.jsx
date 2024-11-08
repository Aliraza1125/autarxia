'use client'
import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    setIsLoading(false);
  }, []);

  return (
    <div className="relative">
      {/* Loading overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      </div>

      {/* Content with fade-in effect */}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;