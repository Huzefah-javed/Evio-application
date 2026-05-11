import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Properties', path: '/properties' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
];

export const NavbarComponent = () => {
  const [menu, setMenu] = useState(true);

  const linkStyles = ({ isActive }) =>
    `transition-colors duration-300 font-medium ${
      isActive ? "text-amber-500" : "text-white hover:text-amber-500"
    }`;

  const mobileLinkStyles = ({ isActive }) =>
    `transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full ${
      isActive ? "text-amber-500 bg-gray-50" : "text-gray-800"
    }`;

  return (
    <header className="bg-[#001F3F] flex w-full fixed top-0 z-50 justify-between items-center md:px-7 px-3 py-4">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="lg:w-24 md:w-20 w-16" />
      </div>

      <nav className="hidden md:flex md:gap-8 lg:gap-12 tracking-wider font-medium capitalize">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className={linkStyles}>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div
        className={`absolute top-[55px] left-0 z-40 w-full bg-white shadow-md text-base font-semibold flex flex-col md:hidden transition-all duration-500 ease-in-out ${
          menu ? "invisible opacity-0" : "visible opacity-100"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenu(true)} 
            className={mobileLinkStyles}
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink
          className="text-left font-semibold sm:px-10 px-6 w-full py-4 text-gray-800"
          to="/contact"
          onClick={() => setMenu(true)}
        >
          Contact
        </NavLink>
      </div>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `hidden md:block rounded-full px-10 py-3 linearGrd text-white transition-opacity ${isActive ? 'opacity-80 ring-2 ring-amber-500' : ''}`
        }
      >
        Contact
      </NavLink>

      <div
        className="md:hidden block text-white cursor-pointer"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <Menu /> : <X />}
      </div>
    </header>
  );
};