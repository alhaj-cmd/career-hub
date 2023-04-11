import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

const FeatureDetails = () => {
    // console.log(loadFeatures);
    const dynamic = useParams();
    const [data, setData] = useState({})

    const dataDetail = useLoaderData()
    useEffect(()=>{

        const jobDetails = dataDetail.find(job => job.id === dynamic.id);
        // console.log(jobDetails)
        setData(jobDetails)
    },[])
    
    const handleAddToCart = (id) =>{
        console.log(id)
        const previousFeature = JSON.stringify(localStorage.getItem("title"))
        console.log(previousFeature);
        if(previousFeature){

        }
        else{
            localStorage.setItem("title", idea)
        }

    }

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
