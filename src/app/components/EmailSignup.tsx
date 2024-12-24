import React from 'react';

const EmailSignup = () => {
  return (
    <section
      className="h-[444px] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: "url('/backimage.jpg')", // Correctly referencing the image from the 'public' folder
      }}
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-lg mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex justify-center items-center text-[#201B34] font-bold">
              ✓
            </span>
            <span>Exclusive offers</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex justify-center items-center text-[#201B34] font-bold">
              ✓
            </span>
            <span>Free events</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex justify-center items-center text-[#201B34] font-bold">
              ✓
            </span>
            <span>Large discounts</span>
          </div>
        </div>
        <div className="flex max-w-lg mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 p-4 text-[#201B34] rounded-l-lg focus:outline-none"
          />
          <button className="bg-[#201B34] text-white px-6 rounded-r-lg">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
