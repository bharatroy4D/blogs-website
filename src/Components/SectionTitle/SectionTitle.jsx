import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

const SectionTitle = ({ title, view, color="text-black"}) => {
    return (
        <div className='flex items-center justify-between border-b-2 border-gray-300 pb-5'>
            <h1 className={`text-3xl font-bold ${color}`}>{title}</h1>
            <p className={`hidden lg:inline-flex items-center text-xl ${color}`} >{view} 
                <LuArrowRight className='text-4xl bg-gray-200 p-1.5 rounded-full ml-3'/>
            </p>
        </div>
    );
};

export default SectionTitle;