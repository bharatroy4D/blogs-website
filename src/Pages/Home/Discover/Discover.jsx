import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useFetch from '../../../Components/CustomHooks/useFetch';

const Discover = () => {
    const { data, loading, error } = useFetch({ url: 'discover.json' });


    return (
        <div className='bg-green-100'>
            <div className='max-w-7xl px-5 py-16 lg:px-10 mx-auto'>
                <SectionTitle title={'Discover Categories'} view={'View All'} />
                {loading && <p>Loading...</p>}
                {error && <p className='text-red-500'>Error: {error}</p>}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-7 space-y-20 py-10'>
                    {data?.map(discover => (
                        <div key={discover.id} className='relative'>
                            <img src={discover.img} alt="discover" className=' w-72 rounded' />
                            <div className='absolute -bottom-12  z-20 w-60 left-1/2 -translate-x-1/2 bg-white rounded text-center py-5 shadow'>
                                <h1 className='text-xl font-bold'>{discover.name}</h1>
                                <p className='text-gray-500 pt-1'>{discover.articles}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
