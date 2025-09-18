import React from 'react';
import { Services } from '../constant';
import { FaTooth } from 'react-icons/fa';

const SectionNav = () => {
  return (
    <div className="overflow-hidden bg-blue-600 text-white py-4">
      {/* Section Nav */}
      <div className="flex animate-scroll gap-6 whitespace-nowrap px-4 text-lg font-medium">
        {[...Services, ...Services].map((service, i) => (
          <div key={i} className="flex items-center gap-2">
            <FaTooth className="text-white opacity-80 w-5 h-5" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;
