import React from 'react';
import man from '../../../assets/man.webp';
import girl from '../../../assets/girl.jpg';
import { CiCalendarDate } from 'react-icons/ci';

const BannerContent = () => {
    return (
        <div className='flex flex-col gap-10 py-6'>
            {/* Content Section 1 */}
            <div className='relative flex flex-col md:flex-row gap-4 rounded-xl shadow p-2'>
                <img
                    src={man}
                    alt="Man"
                    className='w-full md:w-60 h-44 rounded object-cover transform hover:translate-x-1 duration-700'
                />

                <div className='flex flex-col gap-3'>
                    <button className='text-sm text-white font-bold w-fit py-1 px-3 rounded bg-green-400'>Travel</button>
                    <h1 className='text-lg md:text-xl font-bold'>
                        Winter Dressing Tips When It's Really Cold Out
                    </h1>
                    <div className='flex sm:flex-row items-start sm:items-center gap-3 sm:gap-7'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                alt="Author"
                                className='w-6 h-6 rounded-full transition-transform duration-500 hover:scale-110'
                            />
                            <h2 className='text-sm font-semibold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='text-sm font-semibold'>Jul 11, 2025</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section 2 */}
            <div className='relative flex flex-col md:flex-row gap-4 rounded-xl shadow-md p-2'>
                <img
                    src={girl}
                    alt="Girl"
                    className='w-full md:w-60 h-44 rounded object-cover transform hover:translate-x-1 duration-700'
                />

                <div className='flex flex-col gap-3'>
                    <button className='text-sm text-white font-bold w-fit py-1 px-3 rounded bg-pink-400'>Lifestyle</button>
                    <h1 className='text-lg md:text-xl font-bold'>
                        Winter Dressing Tips When It's Really Cold Out
                    </h1>
                    <div className='flex sm:flex-row items-start sm:items-center gap-3 sm:gap-7'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                alt="Author"
                                className='w-6 h-6 rounded-full transition-transform duration-500 hover:scale-110'
                            />
                            <h2 className='text-sm font-semibold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='text-sm font-semibold'>Jul 11, 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;
