
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" px-6 md:px-16 py-20 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Column 1 */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-wider text-[#bf5a3d]">
            Special viewpoint
          </h2>
        </div>

        {/* Column 2 */}
        <div>
          <p className="text-gray-600 leading-relaxed">
            Since 2014, Aestheticaa has been crafting interiors that transcend trends. We believe in the power of restraint, the beauty of proportion, and the poetry of well-chosen materials. Our work is quiet, confident, and enduring.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <p className="text-gray-600 leading-relaxed">
            Each project begins with listening. We don't arrive with a signature style to impose — we arrive with curiosity, expertise, and a commitment to translating your life into spaces that feel inevitable.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;