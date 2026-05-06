"use client";

const PortfolioBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 px-4 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎨</span>
          <div>
            <p className="font-bold text-sm md:text-base">
              Portfolio Showcase - Cloned to Impress
            </p>
            <p className="text-xs opacity-90">
              Demonstrating advanced web development skills for potential clients & employers
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <a
            href="mailto:mohamedfaisal.dev@gmail.com"
            className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform shadow-md"
          >
            📧 Hire Me
          </a>
          <a
            href="tel:+917358874293"
            className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform"
          >
            📞 +91 73588 74293
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
