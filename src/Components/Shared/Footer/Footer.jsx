import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our blog shares articles on web development, technology, productivity, and more. We aim to inspire and educate developers and tech enthusiasts around the world.
          </p>
        </div>

        {/* Quick Links and Categories in a row on small screens */}
        <div className="md:col-span-2">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 text-center sm:text-left">
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition">Technology</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Inspiration</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-400 text-sm mb-3">
            Enter your email to receive the latest blog updates.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </p>
        <div className="flex space-x-4 text-white text-lg">
          <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-500 transition" /></a>
          <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-sky-400 transition" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-500 transition" /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-blue-400 transition" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
