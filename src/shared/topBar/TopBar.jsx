import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GrFacebookOption, GrYoutube } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';

const TopBar = () => {
    return (
        <div className="bg-[#891EF9] text-white text-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-2 px-4 lg:px-10 gap-2">

                {/* Left: Quick Links */}
                <div className="flex flex-wrap text-xs lg:text-sm gap-3 items-center justify-center lg:justify-start">
                    <p className="font-normal">Quick Links:</p>
                    <p className="font-semibold cursor-pointer hover:underline">About Us</p>
                    <p className="font-semibold cursor-pointer hover:underline">Contact Us</p>
                    <p className="font-semibold cursor-pointer hover:underline">Latest News</p>
                </div>

                {/* Right: Date and Social Icons */}
                <div className="hidden lg:inline-flex sm:flex-row sm:items-center gap-2 sm:gap-4">
                    {/* Date */}
                    <p className="flex items-center gap-1 font-medium">
                        <MdOutlineDateRange className="text-lg" />
                        <span className="whitespace-nowrap">Friday, 16 May 2025</span>
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 items-center justify-center sm:justify-start">
                        <GrFacebookOption className="hover:text-gray-200 cursor-pointer" />
                        <FaXTwitter className="hover:text-gray-200 cursor-pointer" />
                        <GrYoutube className="hover:text-gray-200 cursor-pointer" />
                        <FaInstagram className="hover:text-gray-200 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;