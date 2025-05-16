import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='max-w-7xl px-5 lg:px-10 mx-auto'>
            <div className='w-[50%]'>
                <img src={banner} alt="" className='w-full rounded-2xl' />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl font-bold'>winter Dressing Tips When It's Really Cold Out</h1>
                    <p className='text-lg font-semibold'>To mark the first UK show of artist Herni Brande, developers ThemesCamp and German Studio</p>
                    <div className='flex gap-1 items-center'>
                        <img src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g" alt="" className='rounded-full'/>
                        <h2 className='text-lg font-bold'>Bin McKiney</h2>
                    </div>
                </div>
            </div>
            <div className='w-[50%] border'>

            </div>
            
        </div>
    );
};

export default Banner;