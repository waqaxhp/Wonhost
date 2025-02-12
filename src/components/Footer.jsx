import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1e3b8b] to-[#126eb4] text-white py-8 relative">
      {/* Background Bubble Image */}
      <img
        src="/content/Images/o2-flurry-bubbles.png"
        alt="Bubbles"
        className="absolute right-40 top-10 w-auto h-auto object-contain opacity-20 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Column 1 */}
        <div>
          <ul className="space-y-2">
            <li className="flex items-center justify-start space-x-2">
              <i className="fas fa-store border border-white rounded-full p-1"></i>
              <span>Find a store</span>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <i className="fas fa-wifi border border-white rounded-full p-1"></i>
              <span>Check our network</span>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <i className="fas fa-user border border-white rounded-full p-1"></i>
              <span>Sign in to My O2</span>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <i className="fas fa-truck border border-white rounded-full p-1"></i>
              <span>Track my order</span>
            </li>
            <li className="flex items-center justify-start space-x-2">
              <i className="fas fa-search border border-white rounded-full p-1"></i>
              <span>Search</span>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular in shop</h4>
          <ul>
            <li>iPhone 16 Pro Max</li>
            <li>iPhone 16 Pro</li>
            <li>iPhone 16</li>
            <li>Apple Watch Series 10</li>
            <li>Apple iPad Pro 13 inch M4</li>
            <li>Samsung Galaxy S24 Ultra</li>
            <li>Samsung Galaxy S24</li>
            <li>Samsung Galaxy Z Flip6</li>
            <li>Google Pixel 9 Pro XL</li>
            <li>Google Pixel 9 Pro</li>
            <li>Virgin Media broadband deals</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Help and support</h4>
          <ul>
            <li>Help home</li>
            <li>Contact us</li>
            <li>My O2</li>
            <li>Collection and delivery</li>
          </ul>
          <h4 className="text-lg font-semibold mb-4">Shop</h4>
          <ul>
            <li>Phones</li>
            <li>Tablets</li>
            <li>Pay Monthly Sim</li>
            <li>Pay As You Go Sim</li>
            <li>Virgin Media O2 Joint Venture</li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-4 justify-start">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 p-4 "
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 ">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 ">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 ">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="mt-4 text-sm text-left space-x-2">
          <a href="#" className="hover:underline">
            About O2
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Better Connections Plan
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            News & PR
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Sponsorship
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Virgin Media and O2
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Cookie policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Modern Slavery Statement
          </a>
          <p className="text-sm text-left mt-4 md:mt-0">
            &copy; 2024 Telefónica UK Limited. In relation to consumer credit,
            Telefónica UK Limited is authorised and regulated by the Financial
            Conduct Authority (Reference Number 718822).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
