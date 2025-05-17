import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const MostBlogs = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-7xl px-5 py-7 lg:px-10 mx-auto '>
                <SectionTitle title={'Most Read'} view={'View All'} />

            </div>
        </div>
    );
};

export default MostBlogs;