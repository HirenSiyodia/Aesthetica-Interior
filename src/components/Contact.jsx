
import React from "react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 scroll-mt-10 md:px-16 lg:px-32 xl:px-48"
    >
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold tracking-wide text-[#bf5a3d] md:text-5xl">
          Let's talk about your project
        </h2>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-6 md:flex-row md:items-end">

  {/* Name */}
  <div className="flex-1">
    <label
      htmlFor="name"
      className="mb-2 block text-sm font-semibold tracking-wide text-gray-600"
    >
      Name
    </label>

    <input
      id="name"
      type="text"
      placeholder="Your name"
      className="w-full border-b border-gray-400 bg-transparent px-0 py-3 outline-none focus:border-[#bf5a3d]"
    />
  </div>

  {/* Phone */}
  <div className="flex-1">
    <label
      htmlFor="phone"
      className="mb-2 block text-sm font-semibold tracking-wide text-gray-600"
    >
      Phone
    </label>

    <input
      id="phone"
      type="tel"
      placeholder="Your phone number"
      className="w-full border-b border-gray-400 bg-transparent px-0 py-3 outline-none focus:border-[#bf5a3d]"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="border border-black bg-white px-8 py-3 text-[#bf5a3d] transition-colors duration-300 hover:bg-[#bf5a3d] hover:text-white"
  >
    Submit
  </button>

</form>

      {/* Bottom Section */}
      <div className="mt-24 grid grid-cols-1 gap-12 border-t border-gray-300 pt-16 md:grid-cols-3 md:gap-8">
        {/* Brand */}
        <div>
          <div className="leading-none">
            <span className="text-2xl font-semibold tracking-[0.1em] text-[#bf5a3d]">
              AESTHETICA
            </span>

            <span className="ml-24 block text-[10px] font-semibold tracking-[0.35em] text-[#bf5a3d]">
              Interiors
            </span>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 tracking-wide text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold tracking-[0.2em] text-[#bf5a3d]">
            Social Links
          </h3>

          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-4 text-gray-600 transition-colors duration-300 hover:text-[#bf5a3d]"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1">
                  {social.icon}
                </span>

                <span className="tracking-wide">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold tracking-[0.2em] text-[#bf5a3d]">
            Get In Touch
          </h3>

          <div className="space-y-5">
            {/* Email */}
            <a
              href="mailto:siyodiahiren7@gmail.com"
              className="group flex items-center gap-4 text-gray-600 transition-colors duration-300 hover:text-[#bf5a3d]"
            >
              <FaEnvelope className="text-lg" />

              <span>siyodiahiren7@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919819913272"
              className="group flex items-center gap-4 text-gray-600 transition-colors duration-300 hover:text-[#bf5a3d]"
            >
              <FaPhone className="text-sm" />

              <span>+91 98199 13272</span>
            </a>

            {/* CTA */}
            <a
              href="mailto:siyodiahiren7@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-[#bf5a3d] transition-colors duration-300 hover:text-gray-700"
            >
              Start a conversation

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;