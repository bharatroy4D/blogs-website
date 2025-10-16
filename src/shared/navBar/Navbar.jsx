import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-ml.svg";
import { NavLink } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoMoonOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Down করলে fixed হবে
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsFixed(true);
      } 
      // Scroll Up করলে normal হবে
      else if (window.scrollY < lastScrollY) {
        setIsFixed(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full z-50 transition-all duration-500 ${
        isFixed
          ? "fixed top-0 left-0 bg-blue-50 shadow-md animate-slideDown"
          : "relative bg-blue-50"
      }`}
    >
      <div className="max-w-7xl px-5 lg:px-10 mx-auto">
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-32 md:w-40" />

          {/* Nav Links */}
          <div className="hidden lg:flex gap-10 items-center text-base font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/lifeStyle">Lifestyle</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/bookmarks">Bookmark</NavLink>
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4 text-2xl">
            <CiBookmark className="cursor-pointer hidden lg:block" />
            <IoMoonOutline className="cursor-pointer hidden lg:block" />
            <IoSearchOutline className="cursor-pointer hidden lg:block" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl focus:outline-none"
            >
              {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/90 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col gap-4 p-6 text-base font-semibold text-white">
          <div className="flex justify-between items-center border-b pb-2">
            <h1 className="text-xl font-bold">Menu</h1>
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl"
            >
              <IoClose />
            </button>
          </div>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/technology" onClick={() => setMenuOpen(false)}>
            Technology
          </NavLink>
          <NavLink to="/lifeStyle" onClick={() => setMenuOpen(false)}>
            Lifestyle
          </NavLink>
          <NavLink to="/pages" onClick={() => setMenuOpen(false)}>
            Pages
          </NavLink>
          <NavLink to="/bookmarks" onClick={() => setMenuOpen(false)}>
            Bookmark
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
