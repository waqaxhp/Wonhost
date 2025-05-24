import bgImage from "../assets/Images/header img.png"; // Adjust path if needed

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden mt-0.5">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Header Background"
        className="w-full h-auto sm:h-[128px]"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-[23%]">
        <h1 className="text-white text-2xl sm:text-5xl font-semibold">
          Sign in
        </h1>
      </div>
    </div>
  );
};

export default Header;
