import React from "react";
import image1 from "../assets/project1.jpg";
import image2 from "../assets/project2.jpg";
import image3 from "../assets/project3.jpg";
import image4 from "../assets/project4.jpg";

const Blog = () => {
  const blogItems = [
    {
      title: "Analysis",
      image: image1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      button: "Read Analysis"
    },
    {
      title: "Layout",
      image: image2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      button: "View Layout"
    },
    {
      title: "Concept",
      image: image3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      button: "Explore Concept"
    },
    {
      title: "Sketches",
      image: image4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      button: "View Sketches"
    },
  ];

  return (
    <section
      id="blog"
      className="min-h-screen px-6 md:px-32 lg:px-48 py-24 scroll-mt-10 "
    >
      {/* Heading section */}
      <div className="text-4xl tracking-wide text-[#bf5a3d] mb-16 font-semibold">
        Blog
      </div>
      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-12">
        {blogItems.map((item) => (
          <div key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              className="mt-4 h-58 object-cover"
            />
            <h4 className="mt-8 text-xl font-semibold tracking-wide text-[#bf5a3d]">{item.title}</h4>
            <p className="mt-6 text-justify text-gray-700 tracking-wide">{item.text}</p>
            <button className="mt-4 text-[#bf5a3d]">{item.button}</button>
            <div className='h-px bg-gray-300 w-[25%]'></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
