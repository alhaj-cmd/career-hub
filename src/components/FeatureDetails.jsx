import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

const FeatureDetails = () => {
    const loadFeatures = useLoaderData()
    console.log(loadFeatures);
    const { id } = useParams();
    const job = dataDetails.find(job => job.id === parseInt(id));
    
   
    return (
        <div>
             <h3 className='text-3xl text-center font-bold py-28 bg-violet-50'>Job Details</h3>
             <Details job = {job}/>

        </div>
    );
};

export default FeatureDetails;
