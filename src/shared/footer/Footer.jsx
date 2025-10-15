import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 px-5 lg:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">About Us</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Welcome to our tech blog where we share insightful articles on web development, technology trends, productivity tips, and tutorials to empower developers globally.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white transition-all duration-300">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">About</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">Contact</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-white transition-all duration-300">Web Development</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">Technology</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">Tutorials</a></li>
                        <li><a href="#" className="hover:text-white transition-all duration-300">Inspiration</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
                    <p className="text-gray-400 text-sm mb-3">
                        Subscribe to get the latest updates straight to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-12 pt-6 pb-8 text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} MyBlog. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-white text-lg">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;