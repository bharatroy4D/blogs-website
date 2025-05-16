import React from 'react';
import logo from '../../assets/logo-ml.svg'
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';
import { IoMoonOutline, IoSearchOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl px-5 lg:px-10 mx-auto'>
                <div className='flex items-center text-lg font-semibold justify-between py-5'>
                    {/*navbar logo */}
                    <img src={logo} alt="" />
                    {/* navbar route */}
                    <div className='flex  gap-4 items-center'>
                        <NavLink to="home" className="flex items-center">Home <MdOutlineKeyboardArrowDown className='text-xl' />
                        </NavLink>
                        <NavLink to="postFeatures" className="flex items-center">Post Features  <MdOutlineKeyboardArrowDown className='text-xl' /></NavLink>
                        <NavLink to="teachology" className="flex items-center">Teachology  <MdOutlineKeyboardArrowDown className='text-xl' /></NavLink>
                        <NavLink to="lifeStyle" className="flex items-center">Lifestyle  <MdOutlineKeyboardArrowDown className='text-xl' /></NavLink>
                        <NavLink to="pages" className="flex items-center">Pages  <MdOutlineKeyboardArrowDown className='text-xl' /></NavLink>
                        <NavLink to="bookmark" className="flex items-center">Bookmark  <MdOutlineKeyboardArrowDown className='text-xl' /></NavLink>
                    </div>
                    {/* navbar othe icon */}
                    <div className='flex gap-5 items-center text-2xl'>
                        <CiBookmark />
                        <IoMoonOutline />
                        <IoSearchOutline />
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;