import React from "react";

import image1 from "../assets/project1.jpg";
import image2 from "../assets/project2.jpg";
import image3 from "../assets/project3.jpg";
import image4 from "../assets/project4.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-24 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center">

            <h2 className="text-4xl tracking-wider font-semibold mb-12 text-[#bf5a3d]">
              Our Projects
            </h2>

            <div className="max-w-xl space-y-8">

              <p className="text-gray-700 leading-relaxed">
                A comprehensive showcase of customized home design details executed by Aestheticaa Interior. This design is built upon detailed space planning, bespoke layouts, and our premium modular systems.
              </p>

              <p className="text-gray-700 leading-relaxed">
Every section is crafted to guide and inspire — from the softly animated cards to the step-by-step breakdown of the studio’s process. The experience flows like a calm narrative, helping users understand how spaces are shaped with intention, clarity, and care. The result is a journey that feels both editorial and human — structured, immersive, and quietly persuasive.              </p>

              <p className="text-gray-700 leading-relaxed">
Users can explore a curated portfolio of signature interiors — each project paired with large-scale imagery, refined copy, and subtle notes on palette, materiality, and spatial intent. Whether residential or hospitality-focused, every case is designed to express the studio’s timeless, emotionally resonant approach to space.              </p>

              <p className="text-gray-700 leading-relaxed">
Thank you for exploring Aesthetica — a digital space where intentional design meets quiet beauty and emotional depth. Built with clarity and calm in mind, the site reflects a philosophy rooted in stillness, light, and lasting presence — inviting users into a world of thoughtful, timeless interiors.              </p>

            </div>

            <button className="border border-black block mx-auto px-8 py-2 mt-5 bg-white text-[#bf5a3d] hover:bg-[#bf5a3d] hover:text-white transition-colors duration-300">
          View More
        </button>

          </div>


          {/* ================= RIGHT IMAGE COLLAGE ================= */}
          <div className="relative min-h-[650px] hidden lg:block">

            {/* Image 1 - Top Right */}
            <div className="absolute top-0 right-0 w-[65%]">
              <img
                src={image1}
                alt="Interior project"
                className="w-full h-[250px] object-cover border-8 border-white shadow-md"
              />
            </div>

            {/* Image 2 - Middle Left */}
            <div className="absolute top-[160px] left-0 w-[65%] z-10">
              <img
                src={image2}
                alt="Interior project"
                className="w-full h-[250px] object-cover border-8 border-white shadow-md"
              />
            </div>

            {/* Image 3 - Middle Right */}
            <div className="absolute top-[300px] right-0 w-[65%] z-20">
              <img
                src={image3}
                alt="Interior project"
                className="w-full h-[250px] object-cover border-8 border-white shadow-md"
              />
            </div>

            {/* Image 4 - Bottom Left */}
            <div className="absolute top-[440px] left-0 w-[65%] z-30">
              <img
                src={image4}
                alt="Interior project"
                className="w-full h-[250px] object-cover border-8 border-white shadow-md"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;