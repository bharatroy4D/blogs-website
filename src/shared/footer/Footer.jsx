import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-14 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Welcome to <span className="text-blue-500 font-medium">MyBlog</span>, a
            platform where we share insights on web development, technology,
            and creative ideas to inspire developers and creators worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lifeStyle"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Lifestyle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookmarks"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Bookmark
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Categories</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Inspiration
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter and never miss our latest blogs.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-12 py-6 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-blue-500 font-medium">MyBlog</span>. All rights reserved.
          </p>
          <div className="flex space-x-5 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
