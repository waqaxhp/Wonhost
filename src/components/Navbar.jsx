import React, { useState } from "react";
import { PiHandbagSimpleThin } from "react-icons/pi";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="bg-white text-sm text-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center space-x-2">
            {/* Personal */}
            <a
              href="https://www.o2.co.uk/"
              className="text-blue-950 underline underline-offset-4"
            >
              Personal
            </a>

            {/* Vertical line */}
            <div className="w-px h-4 bg-gray-600 font-bold" />

            {/* Business */}
            <a
              href="https://www.o2.co.uk/business"
              className="hover:underline underline-offset-4"
            >
              Business
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center text-black  space-x-1">
            <a
              href="https://accounts.o2.co.uk/signin"
              className="hover:underline underline-offset-4"
            >
              Sign In
            </a>
            <span className=" text-sx">or</span>
            <a
              href="https://accounts.o2.co.uk/register?"
              className="hover:underline underline-offset-4"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-[#0019a5] text-white p-3">
        {/* Mobile Navbar */}
        <div className="container mx-auto px-4 flex justify-between items-center h-12 md:hidden">
          {/* Left: O₂ Logo + Dropdown Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              O<sub>2</sub>
            </span>
            <button onClick={toggleDropdown} className="hover:text-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Right: Links and Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-sky-400">
              Shop
            </a>
            <a href="#" className="text-sm hover:text-sky-400">
              Help
            </a>
            <a href="#" className="text-sm hover:text-sky-400">
              My O<sub>2</sub>
            </a>
            <a href="#" className="hover:text-sky-400">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </a>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="container mx-auto px-4 justify-between items-center h-12 hidden md:flex">
          {/* Left Section */}
          <div className="flex items-center space-x-8 ml-[17.5%]">
            <span className="text-4xl">
              O<sub>2</sub>
            </span>
            <ul className="flex space-x-16">
              <li>
                <a href="#" className="hover:text-sky-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500">
                  Why O<sub>2</sub>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 mr-[17.5%]">
            <a href="#" className="hover:text-sky-500">
              My O<sub>2</sub>
            </a>
            <a href="#" className="hover:text-sky-500">
              <i className="fa-solid fa-magnifying-glass mx-2"></i> Search
            </a>
            <a href="https://www.o2.co.uk/shop/basket">
             <PiHandbagSimpleThin
              className="w-9 h-9 cursor-pointer"
              style={{ strokeWidth: 2 }}
            />
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu (optional) */}
        {dropdownOpen && (
          <ul className="bg-white border-t border-gray-300 text-blue-900 md:hidden">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Why O<sub>2</sub>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
