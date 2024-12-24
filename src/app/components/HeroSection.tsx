import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* Outer section with full width */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-12 px-4 sm:px-6 lg:px-8 w-full h-auto md:h-[704px]">
        
        {/* Inner section with responsive width and height */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:max-w-[1280px] h-auto md:h-[584px] bg-[#6A4C93] rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: Text Section */}
          <div className="flex-1 text-center md:text-left text-white p-6 md:p-10 lg:p-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              The furniture brand for the future, with timeless designs
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>
            <button className="px-6 py-3 bg-[#5C3C6D] text-white font-medium rounded-lg hover:bg-[#6A4C93] transition">
              View collection
            </button>
          </div>

          {/* Right Side: Image Section */}
          <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0">
            <Image
              src="/hero.png" // Replace with your image path
              alt="Modern Furniture"
              width={520}
              height={584}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
