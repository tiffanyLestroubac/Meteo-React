import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

import WeatherGeoloc from 'components/WeatherGeoloc';

const App = () => {
    const [geoloc, setGeoloc] = useState[{latitude:0, logitude:0}];

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position)=>{
            setGeoloc({latitude:position.coords.latitude, longitude:position.coord.longitude});
        });
    },[])
    return (
        
            <>
                {geoloc.latitude === 0 && geoloc.longitude === 0 ? <p>Vous devez authorisé la géolocalisation</p> : <WeatherGeoloc latitude={geoloc.latitude } longitude= {geoloc.longitude}/>}
            </>

     );
};
ReactDOM.render(<App />, document.querySelector('#root'));
