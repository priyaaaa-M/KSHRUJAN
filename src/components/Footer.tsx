import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-[#94DEA5]" />
            <span className="ml-2 text-xl font-bold">KSHRujan</span>
          </div>
          <p className="text-sm text-gray-300">
            © 2024 KSHRujan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;