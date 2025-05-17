import React from 'react';
import { ImPower } from 'react-icons/im';


const Top = () => {
    return (
        <div>
            <div className='max-w-7xl px-5 py-5 lg:px-10 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3 '>
                        <button className='btn  text-xs text-gray-600 font-bold uppercase '><ImPower />
                            top news</button>
                        <p className=' font-semibold hover:underline'><link rel="stylesheet" href="#" />Winter Dressing Tips When It's Really Cold Out</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-sm font-bold'>Quick Links:</p>
                        <p className='font-bold text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white rounded py-2 px-3'>Workout</p>
                        <p className='font-bold text-gray-500 border border-gray-500  hover:bg-gray-500 hover:text-white rounded py-2 px-3'>Wellness</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;