
import React from "react";
import homeImage from "../assets/home.jpg";

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">

      {/* Big Image */}
      <div className="absolute right-0 top-0 w-[58%] h-[87%]">
        <img
          src={homeImage}
          alt="Aestheica Interiors"
          className="w-full h-full"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 ml-[5%] w-[45%] bg-white/90 p-16 shadow-lg">

        <h1 className="text-4xl text-center tracking-wider font-semibold mb-5 text-[#bf5a3d]">
          Interior Design
        </h1>

        <p className="text-gray-600 leading-relaxed tracking-wide">
A sanctuary of light and space, where every detail whispers elegance. Timeless materials meet contemporary vision. This is living, elevated — for homes across India, from compact apartments to expansive residences. Together they focus on combining their unique tastes to create stunning, comfortable and functional interiors.       </p>
        <button className="border border-black block mx-auto px-8 py-2 mt-5 bg-white text-[#bf5a3d] hover:bg-[#bf5a3d] hover:text-white transition-colors duration-300">
          Learn More
        </button>

      </div>

    </section>
  );
};

export default Home;
