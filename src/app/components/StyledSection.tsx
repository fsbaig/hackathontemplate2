import React from 'react';

const StyledSection = () => {
  return (
    <section className="flex justify-center items-center bg-white-100 py-12">
      <div className="w-full max-w-[1600px] h-auto flex justify-center">
        {/* Text Section */}
        <div
          className="w-full sm:w-[750px] h-auto bg-[#2E224B] text-white p-8 flex flex-col justify-center"
          style={{ gap: '16px' }}
        >
          <h2 className="text-[36px] font-bold leading-tight">
            It started with a small idea
          </h2>
          <p className="text-[20px]">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-[#2E224B] text-sm font-medium rounded-md hover:bg-gray-200 transition">
            View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[750px] h-auto">
          <img
            src="/styleimage.jpg" // Update with your actual image path
            alt="Styled Section Image"
            className="w-full h-full object-cover" // Removed rounded border
          />
        </div>
      </div>
    </section>
  );
};

export default StyledSection;
