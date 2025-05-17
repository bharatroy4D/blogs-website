import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GrFacebookOption, GrInstallOption, GrLinkedinOption, GrTwitter, GrX, GrYoutube } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';

const TopBar = () => {
    return (
        <div className='bg-[#891EF9]'>
            <div className='max-w-7xl flex justify-between text-white py-2 px-5 lg:px-10 mx-auto'>
                <div className='flex gap-3 items-center'>
                    <p className='text-sm'> Quick Links: </p>
                    <p className='text-sm font-semibold'>About Us</p>
                    <p className='text-sm font-semibold'>Contact Us</p>
                    <p className='text-sm font-semibold'>Latest News</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='flex gap-1 items-center text-sm font-semibold'><MdOutlineDateRange className='text-2xl' />
                        Friday, 16 May 2025</p>
                    <div className='flex gap-3 items-center border-l pl-3 border-gray-300'>
                        <GrFacebookOption className='text-' />
                        <FaXTwitter className='text-' />
                        <GrYoutube className='text-' />
                        <FaInstagram className='text-'/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;