import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="bg-white text-blue-900 border-b border-gray-300">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          {/* Left Section */}
          <div className="hidden md:flex items-center space-x-4 ml-[17.5%]">
            <a href="#" className="text-sm font-medium hover:text-sky-500">
              Personal
            </a>
            <span>|</span>
            <a href="#" className="text-sm font-medium hover:text-sky-500">
              Business
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex text-sm font-medium mr-[17.5%]">
            <a href="#" className="hover:text-sky-500">
              Sign in or Register
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-[#0019a5] text-white p-3">
        <div className="container mx-auto px-4 flex justify-between items-center h-12">
          {/* Left Section */}
          <div className="flex items-center space-x-8 ml-[17.5%]">
            <span className="text-4xl">
              O<sub>2</sub>
            </span>

            {/* Mobile Dropdown Button */}
            <button
              className="md:hidden text-sm font-medium flex items-center my-4 hover:text-sky-500"
              onClick={toggleDropdown}
            >
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

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-16">
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
              <i className="fa-solid fa-magnifying-glass mx-2"></i>
              Search
            </a>
            <a href="#" className="hover:text-sky-500">
              <i className="fa-solid fa-basket-shopping"></i>
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <ul className="bg-white border-t border-gray-300 text-blue-900 md:hidden">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Why O<sub>2</sub>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Help
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
