import React from 'react';
import { FaRegComment } from 'react-icons/fa6';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const MostBlogs = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-7xl px-5 py-10 lg:px-10 mx-auto'>
                <SectionTitle title={'Most Read'} view={<span className="hidden lg:block text-white">View All</span>} color='text-white' />
                
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* left side */}
                    <div className='flex flex-col gap-5 py-5 w-full lg:w-1/4'>
                        {/* card -1 */}
                        <Card
                            img="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/09/oliver-pecker-HONJP8DyiSM-unsplash.webp"
                            category="Sport"
                            color="bg-gray-500"
                            title="USA and Portugal in Race for Final"
                            date="Sep 29, 2024"
                        />
                        {/* card -2 */}
                        <Card
                            img="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/07/fodi.webp"
                            category="Food"
                            color="bg-amber-500"
                            title="USA and Portugal in Race for Final"
                            date="Sep 26, 2024"
                        />
                    </div>

                    {/* middle section */}
                    <div className='w-full lg:w-1/2 pt-5'>
                        <div className='relative gap-3 rounded-xl shadow bg-white'>
                            <img
                                src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/blog-tech.webp"
                                alt="Tech"
                                className='w-full h-64 md:h-80 lg:h-64 object-cover rounded-t'
                            />
                            <div className='flex flex-col gap-3 p-5 bg-black/90 text-white'>
                                <button className="text-sm text-white bg-blue-400 font-bold w-fit py-2 px-4 rounded">
                                    Technology
                                </button>
                                <h1 className='text-2xl md:text-3xl font-bold'>5G Technology Transform The</h1>
                                <p className='text-sm md:text-base font-semibold'>
                                    Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam Risus rutrum ultrices pretium
                                </p>
                                <div className='flex flex-wrap items-center gap-5'>
                                    <div className='flex gap-2 items-center'>
                                        <img
                                            src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                            alt="Profile"
                                            className="rounded-full transition-transform duration-300 hover:scale-110"
                                        />
                                        <h2 className='text-sm font-semibold'>Bin McKiney</h2>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <CiCalendarDate className='text-2xl' />
                                        <span className='text-sm md:text-base text-white font-semibold'>May 30, 2024</span>
                                    </div>
                                    <CiBookmark className='text-3xl text-black shadow bg-gray-100 p-2 rounded-full' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex flex-col gap-5 py-5 w-full lg:w-1/4'>
                        {/* card -1 */}
                        <Card
                            img="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/sports-3.webp"
                            category="Sport"
                            color="bg-gray-500"
                            title="USA and Portugal in Race for Final"
                            date="Sep 29, 2024"
                        />
                        {/* card -2 */}
                        <Card
                            img="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/08/blog-travel.webp"
                            category="Food"
                            color="bg-amber-500"
                            title="USA and Portugal in Race for Final"
                            date="Sep 26, 2024"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = ({ img, category, color, title, date }) => (
    <div className='h-60 relative'>
        <img src={img} alt="" className='w-full h-full object-cover rounded-xl' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/25 to-transparent rounded-xl z-0'></div>
        <div className='absolute text-white bottom-5 pl-5 left-1/2 z-10 w-full text-left flex flex-col items-start gap-3 transform -translate-x-1/2'>
            <button className={`text-sm font-bold py-1 px-3 rounded ${color}`}>{category}</button>
            <h1 className='text-lg md:text-xl font-bold'>{title}</h1>
            <div className='flex justify-between w-60 items-center'>
                <div className='flex items-center gap-2'>
                    <CiCalendarDate className='text-xl' />
                    <span className='text-sm text-white font-semibold'>{date}</span>
                </div>
                <CiBookmark className='text-3xl bg-white text-gray-600 p-2 rounded-full shadow' />
            </div>
        </div>
    </div>
);

export default MostBlogs;
