import React from 'react';
import { FaTruck, FaCheckCircle, FaTags, FaRecycle } from 'react-icons/fa';

const BrandDifference: React.FC = () => {
  const features = [
    {
      icon: <FaTruck className="text-4xl text-gray-800 mb-4" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-gray-800 mb-4" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <FaTags className="text-4xl text-gray-800 mb-4" />,
      title: "Unbeatable prices",
      description: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      icon: <FaRecycle className="text-4xl text-gray-800 mb-4" />,
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-[1440px] px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandDifference;
