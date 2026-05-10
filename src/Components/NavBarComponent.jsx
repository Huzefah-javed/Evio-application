import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [menu, setMenu] = useState(true);

  return (
    <header className="bg-[#001F3F] flex w-full fixed top-0 z-50 justify-between items-center md:px-7 px-3 py-4 ">
      <div className="logo">
        <img src="/logo.png" alt="" className="lg:w-24 md:w-20 w-16" />
      </div>
      <nav class="hidden md:flex md:gap-8 lg:gap-12 tracking-wider font-medium capitalize">
        <Link
          class="hover:text-amber-500 text-white font-medium transition-colors duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          class="hover:text-amber-500 text-white font-medium transition-colors duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          class="hover:text-amber-500 text-white font-medium transition-colors duration-300"
          to="/properties"
        >
          Properties
        </Link>
        <Link
          class="hover:text-amber-500 text-white font-medium transition-colors duration-300"
          to="/services"
        >
          Services
        </Link>
        <Link
          class="hover:text-amber-500 text-white font-medium transition-colors duration-300"
          to="/blogs"
          >
          Blogs
        </Link>
      </nav>

      <div
        class={`absolute top-[55px] left-0 z-40 w-full bg-white shadow-md text-base  font-semibold flex flex-col md:hidden transition-all duration-500 ease-in-out  ${menu ? "invisible opacity-0" : "visible opacity-100"}`}
      >
        <Link
          class="transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full"
          to="/"
          data-discover="true"
        >
          Home
        </Link>
        <Link
          class="transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full"
          to="/about"
        >
          About
        </Link>
        <Link
          class="transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full"
          to="/properties"
        >
          Properties
        </Link>
        <Link
          class="transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full"
          to="/services"
        >
          Services
        </Link>
        <Link
          class="transition-colors duration-300 h-11 flex items-center border-b border-gray-300 sm:px-10 px-6 w-full"
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          class="  text-left font-semibold sm:px-10 px-6 w-full py-4"
          to="/contact"
        >
          Contact
        </Link>
      </div>

      <Link to="/contact" className="hidden md:block rounded-full px-10 py-3 linearGrd text-white">
        Contact
      </Link>

      <div
        className="md:hidden block text-white"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <Menu /> : <X />}
      </div>
    </header>
  );
};
