import React from 'react';

const Details = ({job}) => {
    const [ salary, address, email, phone, respons, description, education,exprience] = job;
    return (
        <div>
             <h4>hello{description}</h4>
            {/* <div className='bg-violet-50 lg:py-6 lg:px-8 sm:px-2 flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg   lg:pr-2 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                       <p>Job Description:{description}</p>
                        <p className='text-base text-gray-700 md:text-lg'>
                            A tech job is one that deals with computer programs, hardware, software, networking, and maintaining systems.
                        </p>
                        <button className='bg-gradient-to-r text-white font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>Get Started</button>
                    </div>
                </div>

                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56 md:pt-6  sm:h-96'>
                        <img className='md:h-96 rounded-lg' src="img.png" alt="" />
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Details;