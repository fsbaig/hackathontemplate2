import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#201B34] text-white h-auto flex flex-col justify-between">
      <div className="container mx-auto max-w-[1440px] px-4 py-12">
        {/* Menu, Categories, and Our Company Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-8 sm:space-y-0">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="flex-1 order-last sm:order-none">
            <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row w-full sm:max-w-[500px] h-[56px] sm:h-[60px] mt-4 sm:mt-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[#292541] text-white p-3 w-full rounded-t-md sm:rounded-l-md sm:rounded-tl-md focus:outline-none"
              />
              <button className="bg-white text-[#201B34] px-6 py-3 font-medium rounded-b-md sm:rounded-r-md sm:rounded-tr-md mt-2 sm:mt-0">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="bg-[#292541] py-4 px-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm mb-4 sm:mb-0">© 2022 Avion LTD</p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
          <a href="#" aria-label="LinkedIn" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Facebook" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Skype" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-skype"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Pinterest" className="text-white text-xl hover:text-gray-300 mb-2 sm:mb-0">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
