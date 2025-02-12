import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#1d81bc] to-[#1d81bc] h-32 w-full flex items-center overflow-hidden mt-0.5">
        <div className="relative h-full w-full flex items-center bg-[url('/content/Images/download.png')] bg-cover bg-left">
          <h1 className="text-white text-5xl mb-6 font-23 ml-[23%]">Sign in</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
