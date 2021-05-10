import React, {useState, useEffect} from 'react';
import Card from 'Card';

const WeatherGeoloc = (props) => {

    const {latitude, longitude} = props;
    const [datas, setData] = useState( {days:[], isFetching: false});

    useEffect (() => {

        const fetchWeatherGeoloc = async () =>{
            // fetch de l'api
        };
        fetchWeatherGeoloc()
    }, [latitude,longitude]);

    return (
        <>
            {datas.days.map((data)=>(<Card data={data} key={data.dt} />))}
        </>
    );

};
export default WeatherGeoloc;