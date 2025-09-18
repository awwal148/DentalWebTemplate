'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { createNavLinks } from '../constant';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState();
  const pathname = usePathname();
  const navLinks = createNavLinks();

  const toggleDropdown = (label) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };
  const isActive = (href) => pathname === href;

  const isParentActive = (children) =>
    children?.some((child) => pathname === child.href);

  return (
    <header className="fixed top-10 left-0 w-full z-50 bg-white shadow-md h-16 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Dental</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {navLinks.map((item, index) => (
            <div key={index} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`font-medium px-2 py-1 transition border-b-2 ${
                      activeDropdown === item.label || isParentActive(item.children)
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-50 min-w-[180px]">
                      <ul className="py-2 px-4 space-y-2">
                        {item.children.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className={`block font-medium px-2 py-1 transition ${
                                isActive(subItem.href)
                                  ? 'text-blue-600'
                                  : 'text-gray-700 hover:text-blue-600'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`font-medium px-2 py-1 transition border-b-2 ${
                    isActive(item.href)
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        {/* Mobile Menu Icon */}
          {!isOpen && (
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} className="text-2xl text-blue-600">
                <FaBars />
              </button>
            </div>
          )}
      </div>
      {/* Mobile Menu */}
          {isOpen && (
      <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-2.5rem)] bg-white z-40 shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="text-xl font-bold text-blue-600">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-blue-600">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <>
                  <span className="text-gray-700 font-semibold">{item.label}</span>
                  <ul className="pl-4 mt-2 border-l border-gray-200 space-y-2">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block text-gray-600 hover:text-blue-600 transition px-2 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
      )}
    </header>
  );
};

export default Header;
