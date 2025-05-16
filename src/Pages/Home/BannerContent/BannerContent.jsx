import React from 'react';
import banner from '../../../assets/banner.jpg'
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';

const BannerContent = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='relative flex gap-3 roounded-xl shadow '>
                <img src={banner} alt="" className='w-60 h-44 rounded' />

                {/* Gradient overlay */}
                <div className=' rounded-2xl z-0'></div>

                {/* Text Content */}
                <div className='flex flex-col gap-3'>
                    <button className='text-sm font-bold w-fit py-1 px-3 rounded bg-blue-400'>Technology</button>
                    <h1 className='text-xl font-bold'>Winter Dressing Tips When It's Really Cold Out</h1>
                    <div className='flex items-center gap-7'>
                        <div className='flex gap-2 items-center'>
                            <img src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g" alt="" className='rounded-full' />
                            <h2 className='text-xs font-semibold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='font-semibold'>Jul 11, 2025</span>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className='relative flex gap-3 rounded-xl shadow '>
                <img src={banner} alt="" className='w-60 h-44 rounded' />

                {/* Gradient overlay */}
                <div className=' rounded-2xl z-0'></div>

                {/* Text Content */}
                <div className='flex flex-col gap-3'>
                    <button className='text-sm font-bold w-fit py-1 px-3 rounded bg-blue-400'>Technology</button>
                    <h1 className='text-xl font-bold'>Winter Dressing Tips When It's Really Cold Out</h1>
                    <div className='flex items-center gap-7'>
                        <div className='flex gap-2 items-center'>
                            <img src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g" alt="" className='rounded-full' />
                            <h2 className='text-xs font-semibold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='font-semibold'>Jul 11, 2025</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;