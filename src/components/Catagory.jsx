import React from 'react';

const Catagory = ({data}) => {
    console.log(data)
    const {name, picture, title}=data;
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Catagory;