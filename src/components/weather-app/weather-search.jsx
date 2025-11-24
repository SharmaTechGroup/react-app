import { createContext, useState } from "react";
import { WeatherDetails } from "./weather-details";

export let CityContext = createContext(null);

export function WeatherSearch(){

    const [cityName , setCityName] = useState('');
    const [contextValue, setContextValue] = useState('Hyderabad');

    function handleCityChange(e){
        setCityName(e.target.value);
       
    }

    function handleSearchClick(){
        setContextValue(cityName);
        console.log(cityName);
        console.log(contextValue);
    }

    return(
        <div className="bg-secondary p-4 d-flex justify-content-center" style={{height:'100vh'}}>
            <div className="bg-light p-5 w-50">
                <div className="fw-bold my-3 fs-2">
                   <span className="bi bi-cloud"></span> Weather App 
                </div>
                <div className="input-group">
                    <input type="text" onChange={handleCityChange} className="form-control" placeholder="Enter City Name" />
                    <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                </div>
                <div>
                    <CityContext value={contextValue}>
                        <WeatherDetails />
                    </CityContext>
                </div>
            </div>
        </div>
    )
}