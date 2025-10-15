import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useFetch from '../../../hooks/useFetch';

const Discover = () => {
    const { data, loading, error } = useFetch({ url: 'discover.json' });

    return (
        <div className='bg-green-100'>
            <div className='max-w-7xl px-5 py-16 lg:px-10 mx-auto'>
                <SectionTitle title={'Discover Categories'} view={'View All'} />
                
                {loading && <p>Loading...</p>}
                {error && <p className='text-red-500'>Error: {error}</p>}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16 py-10'>
                    {data?.map(discover => (
                        <div key={discover.id} className='relative group'>
                            {/* Responsive image */}
                            <img 
                                src={discover.img} 
                                alt="discover" 
                                className='w-full h-64 object-cover rounded-xl transform group-hover:scale-105 duration-500' 
                            />

                            {/* Floating info box */}
                            <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-2 duration-500 z-20 w-[85%] bg-white rounded-xl text-center py-4 px-2 shadow-lg'>
                                <h1 className='text-lg md:text-xl font-bold'>{discover.name}</h1>
                                <p className='text-gray-500 text-sm md:text-base pt-1'>{discover.articles}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
