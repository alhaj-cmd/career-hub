import React, { useEffect, useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon, CheckIcon} from '@heroicons/react/24/solid'

const Applied = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJob = localStorage.getItem('appliedJob');
        if (storedJob) {
            setAppliedJobs(JSON.parse(storedJob));
        }
    }, []);
    console.log(appliedJobs)
    return (
        <div>
            <h3 className='text-3xl text-center font-bold py-28 bg-violet-50'>Applied Jobs</h3>
           
       <div className='lg:py-28 lg:px-20'>
       <p className='flex justify-end px-6 py-6  '><button className='border flex bg-gray-100 p-2'>Filter By <CheckIcon className="h-6 ml-2  w-6" /></button></p>
       {
            appliedJobs.map((appliedJob, index) =>
            
             <div  key ={index}>
               
               
                <div className="border flex sm:flex-rows-1 py-4 px-4 my-4 mx-6 justify-between overflow-hidden ">
               <div className='inline-flex mx-4'>
               <img className='h-30 border rounded-xl bg-gray-600 w-40' src={appliedJob.picture} alt="" />
                <div className='py-4 px-4'>
                    <h2 className='text-2xl'>{appliedJob.name}</h2>
                    <p className='py-1'>{appliedJob.title}</p>
                    <div className='flex py-1'>
                        <button className='mr-4 border py-1 px-4 text-violet-600'>{appliedJob.job}</button>
                        <button className='ml-4 border py-1 px-4 text-violet-600'>{appliedJob.length}</button>
                    </div>
                    <p className='mr-6 flex py-2'> <MapPinIcon className="h-6 text-gray-300 w-6" /> {appliedJob.address}<span className='ml-16 inline-flex' ><CurrencyDollarIcon className="h-6 text-gray-300 w-6" /> salary: {appliedJob.salary}</span></p>
                </div>
               </div>
             <div className='flex items-center'>
             <button className='absulate bg-gradient-to-r text-white font-bold rounded-lg py-2 px-4 from-sky-500 to-indigo-400'>View Details</button>
             </div>
            </div>
            </div> )
          }
       </div>
        </div>
    );
};

export default Applied;