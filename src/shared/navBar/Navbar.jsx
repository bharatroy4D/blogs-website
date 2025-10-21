import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-ml.svg";
import { NavLink } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoMoonOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosBookmark } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookmarkOpen, setBookmarkOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full z-50 transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 bg-blue-700 shadow-md text-white"
            : "relative bg-blue-50 text-black"
        }`}
      >
        <div className="max-w-7xl px-5 lg:px-10 mx-auto">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-32 md:w-40" />

            {/* Nav Links */}
            <div className="hidden lg:flex gap-10 items-center text-base font-semibold">
              {[
                { to: "/", label: "Home" },
                { to: "/technology", label: "Technology" },
                { to: "/lifeStyle", label: "Lifestyle" },
                { to: "/pages", label: "Pages" },
                { to: "/bookmarks", label: "Bookmark" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? isFixed
                          ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                          : "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-500"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Icons + Hamburger */}
            <div className="flex items-center gap-4 text-2xl">
              {/* Bookmark Icon */}
              <CiBookmark
                className="cursor-pointer hidden lg:block "
                onClick={() => setBookmarkOpen(true)}
                title="Open Bookmarks"
              />
            

              <IoMoonOutline className="cursor-pointer hidden lg:block" />
              <IoSearchOutline className="cursor-pointer hidden lg:block" />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-3xl focus:outline-none"
              >
                {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
              </button>
            </div>
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

          {[
            { to: "/", label: "Home" },
            { to: "/technology", label: "Technology" },
            { to: "/lifeStyle", label: "Lifestyle" },
            { to: "/pages", label: "Pages" },
            { to: "/bookmarks", label: "Bookmark" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-yellow-300" : "text-white hover:text-blue-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bookmarks Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-black shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          bookmarkOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-700">Bookmarks</h2>
          <IoClose
            className="text-2xl cursor-pointer text-gray-700 hover:text-red-500"
            onClick={() => setBookmarkOpen(false)}
          />
        </div>

        {/* Bookmark List */}
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
          {/* Example bookmarks */}
          <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">React Performance Tips</h3>
            <p className="text-sm text-gray-600 mt-1">by John Doe</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">10 CSS Tricks You Should Know</h3>
            <p className="text-sm text-gray-600 mt-1">by Jane Smith</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Next.js vs React – Which to Choose?</h3>
            <p className="text-sm text-gray-600 mt-1">by Alex Brown</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
