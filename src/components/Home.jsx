import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg-gray-200 lg:py-8 lg:px-8  flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg  lg:pr-2 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <h2 className='max-w-lg mb-6 font-sans text-7xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>
                            What is the job <br /> of a tech? <br />
                            <span className='inline-block text-blue-400'>See More</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            A tech job is one that deals with computer programs, hardware, software, networking, and maintaining systems.
                        </p>
                    </div>
                </div>

                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                        <img className='lg:pt-6 ' src="tech.avif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;