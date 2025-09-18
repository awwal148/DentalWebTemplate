// components/TopBar.js
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';

const HeaderInfo = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-60 bg-blue-700 text-white text-sm px-4 py-2 flex justify-between items-center flex-wrap h-10'>
        {/* // <div className="relative z-50 bg-gray-900 text-white text-sm px-4 py-2 flex justify-between items-center flex-wrap"> */}
      <div className="flex items-ce#nter gap-4">
        <span className="flex items-center gap-1">
          <FaPhoneAlt /> <a href="tel:+1234567890">+1 234 567 890</a>
        </span>
        <span className="flex items-center gap-1">
          <FaEnvelope /> <a href="mailto:info@example.com">info@example.com</a>
        </span>
      </div>
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default HeaderInfo;
