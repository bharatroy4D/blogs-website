import React, { useState } from 'react';
import logo from '../../assets/logo-ml.svg';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';
import { IoMoonOutline, IoSearchOutline, IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-blue-50 relative z-50'>
            <div className='max-w-7xl px-5 lg:px-10 mx-auto'>
                <div className='flex items-center justify-between py-5'>

                    {/* Logo */}
                    <img src={logo} alt="Logo" className='w-32 md:w-40' />

                    {/* Nav Links for large device */}
                    <div className='hidden lg:flex gap-6 items-center text-base font-semibold'>
                        <NavLink to="/" className="flex items-center gap-1">Home <MdOutlineKeyboardArrowDown /></NavLink>
                        {/* <NavLink to="/postFeatures" className="flex items-center gap-1">Post Features <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink> */}
                        <NavLink to="/technology" className="flex items-center gap-1">Technology <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                        <NavLink to="/lifeStyle" className="flex items-center gap-1">Lifestyle <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                        <NavLink to="/pages" className="flex items-center gap-1">Pages <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                        <NavLink to="/bookmarks" className="flex items-center gap-1">Bookmark <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                    </div>

                    {/* Icons + Hamburger */}
                    <div className='flex items-center gap-4 text-2xl'>
                        <CiBookmark className='cursor-pointer hidden lg:block' />
                        <IoMoonOutline className='cursor-pointer hidden lg:block' />
                        <IoSearchOutline className='cursor-pointer hidden lg:block' />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='lg:hidden text-3xl focus:outline-none'
                        >
                            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
                        </button>
                        <GiHamburgerMenu className='hidden lg:block' />
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Slide-In Effect */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className='flex flex-col gap-4 p-6 text-base font-semibold text-gray-700'>
                    <div className='flex justify-between items-center border-b pb-2'>
                        <h1 className='text-xl font-bold'>Menu</h1>
                        <button onClick={() => setMenuOpen(false)} className='self-end text-2xl'>
                            <IoClose />
                        </button>
                    </div>
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">Home <MdOutlineKeyboardArrowDown /></NavLink>
                    <NavLink to="/technology" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">Technology <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                    <NavLink to="/lifeStyle" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">Lifestyle <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                    <NavLink to="/pages" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">Pages <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                    <NavLink to="/bookmarks" onClick={() => setMenuOpen(false)} className="flex items-center gap-1">Bookmark <MdOutlineKeyboardArrowDown className='text-sm' /></NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;