import React from 'react';

const Features = ({Feature}) => {
    const {name, id, title, picture}  = Feature;
    return (
        <div>
            <div className="feature">
                <img src={picture} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Features;