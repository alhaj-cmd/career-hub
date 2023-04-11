import React from 'react';
import { MapPinIcon, CurrencyDollarIcon,  LinkIcon, PhoneIcon,} from '@heroicons/react/24/solid'

const Details = ({data}) => {
    const  {salary, address, title, email, phone, respons, description, education,exprience} = data;
    return (
        <div className='lg:py-16 lg:px-16  sm:px-2 flex flex-col items-center gap-4 justify-between lg:flex-row'>
           <div className=''>
           <h4 className='py-4'><span className='font-bold'>Job Description: </span>{description}</h4>
             <p className='py-4'><span className='font-bold'>Job Responsibility: </span>{respons}</p>
             <p className='py-4'><span className='font-bold'>Educational Requirements: <br /></span>{education}</p>
             <p className='py-4'><span className='font-bold'>Experiences: <br /></span>{exprience}</p>

           </div>
          <div>
          <div className='border bg-violet-50 lg:py-10  px-4'>
            {/* <h2>{address}</h2> */}
            <p  className='font-bold border-b-[3px]'>Job <br /> Details</p>
            <p className='mr-6 flex py-2'><CurrencyDollarIcon className="h-6 w-6" />  <span  className='font-semibold'>Salary :</span>{salary}</p>
            <p><span  className='font-semibold mr-6 flex py-2'> <PhoneIcon className="h-6 w-6" />Job Title :</span>{title}</p>
            <p className='font-bold border-b-[3px]'>Contact <br /> Information</p>
            <p><span className='font-semibold mr-6 flex py-2'><PhoneIcon className="h-6 w-6" /> Phone :</span>{phone}</p>
            <p><span className='font-semibold mr-6 flex py-2'> <LinkIcon className="h-6 w-6" />Email: </span>{email}</p>
            <h2 className='mr-6 flex py-2'><MapPinIcon className="h-6 w-6" /> <span className='font-semibold'>Address :</span>{address}</h2>
            
           </div>
           <button className='bg-gradient-to-r text-white w-full font-bold rounded-lg mt-2 px-4 py-3 from-sky-500 to-indigo-400'>Apply Now</button>
          </div>
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