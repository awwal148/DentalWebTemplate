'use client'
import React, { useState } from 'react'
import { beforeafterimages } from '../constant';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Beforendafter = () => {

     const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? beforeafterimages.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev === beforeafterimages.length - 1 ? 0 : prev + 1));
      };

  return (
    <div className="font-sans bg-white text-gray-800">
    {/* BEFORE & AFTER */}
       <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
            Before and After
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            See the Difference: <span className="text-blue-600">Before & After</span>
          </h1>
    
          {/* Slider */}
          <div className="relative mt-10 w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl h-[400px]">
            <Image
              src={beforeafterimages[currentIndex].src}
              alt={beforeafterimages[currentIndex].alt}
              width={1200}
              height={800}
              className="object-cover"
            />
    
            {/* Labels */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-1 text-sm font-semibold rounded-full shadow z-30">
              Before
            </span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-1 text-sm font-semibold rounded-full shadow z-30">
              After
            </span>
          </div>
    
          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition px-4 py-2 rounded-full shadow-md flex items-center space-x-2"
            >
              <FaArrowLeft />
              <span className="font-medium text-sm">Prev</span>
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-full shadow-md flex items-center space-x-2"
            >
              <span className="font-medium text-sm">Next</span>
              <FaArrowRight />
            </button>
          </div>
    
          {/* CTA Button */}
          <button className="mt-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
            View More Transformations
          </button>
        </section>
        </div> 
         )
}

export default Beforendafter