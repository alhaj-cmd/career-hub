import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

// dynamic data load

const FeatureDetails = () => {
    const dynamic = useParams();
    const [data, setData] = useState({})

    const dataDetail = useLoaderData()
    useEffect(()=>{

        const jobDetails = dataDetail.find(job => job.id === dynamic.id);
        // console.log(jobDetails)
        setData(jobDetails)
    },[])
    
//   localstorage handleaddtocart

    const handleAddToCart = (id) => {
        const storedJob = localStorage.getItem('appliedJob');
        if (storedJob) {
            const appliedJobs = JSON.parse(storedJob);
            const updatedJobs = [...appliedJobs, id];
            localStorage.setItem('appliedJob', JSON.stringify(updatedJobs));
        } else {
            localStorage.setItem('appliedJob', JSON.stringify([id]));
        }
    };

    return (
        <div>
             <h3 className='text-3xl text-center font-bold py-28 bg-violet-50'>Job Details</h3>
              <Details data = {data}
              handleAddToCart={handleAddToCart}
              ></Details>
              

        </div>
    );
};

export default FeatureDetails;
