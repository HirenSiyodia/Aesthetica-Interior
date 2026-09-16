import React from "react";

const Navbar = () => {
  const Navlinks = [
    {name: "Home", href: "home" },
     {name: "About", href: "about"},
      {name: "Projects", href: "projects"},
       {name: "Studio", href: 'studio'},
        {name: "Blog", href: 'blog'},
         {name: "Contact",href: 'contact' }];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center px-20 py-8">
<div className="flex flex-col leading-none text-[#bf5a3d]">
  <span className="text-3xl font-bold tracking-[0.1em]">
    AESTHETICA
  </span>

  <span className="text-[12px] font-semibold tracking-[0.35em] ml-32">
    Interiors
  </span>
</div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-[#bf5a3d]">
            {Navlinks.map((item) => (
              <li key={item.name}>
                <a href={`#${item.href.toLowerCase()}`}> {item.name} </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
