"use client";

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 max-w-[1440px]">
        {/* Left Section: Search Icon */}
        <div className="flex items-center">
          <FaSearch className="h-4 w-4 text-gray-600 cursor-pointer" />
        </div>

        {/* Center Section: Logo */}
        <h1 className="text-2xl font-bold text-gray-900" style={{ width: '65px', height: '30px' }}>
          Avion
        </h1>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-6">
          <FaShoppingCart className="h-4 w-4 text-gray-600 cursor-pointer" />
          <FaUser className="h-4 w-4 text-gray-600 cursor-pointer" />
          <Sheet>
            <SheetTrigger asChild>
              <button onClick={toggleMenu} className="lg:hidden">
                {menuOpen ? <FaTimes className="h-4 w-4 text-gray-600" /> : <FaBars className="h-4 w-4 text-gray-600" />}
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              {/* Navigation Links for Mobile */}
              <nav className="flex flex-col space-y-2 mt-4">
                {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-gray-500 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom Section: Navigation Links for Desktop */}
      <nav className="mt-2 border-t border-gray-200 hidden lg:block">
        <div className="container mx-auto flex justify-center space-x-6 px-6 py-2 max-w-[1440px]">
          {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
