import React from 'react';

const Card = ({data}) => {
    
    //Transformation des timestamp
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    let day = days[new Date(data.dt*1000).getDay()];

    return (
        <>
            <div>
                <h2> {day} </h2>
                <p>Temperature min : {data.temp.min}</p>
            </div>
        </>
    );
};
export default Card;