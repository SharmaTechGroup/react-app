import { useContext, useEffect, useState } from "react"
import { CityContext } from "./weather-search"
import axios from "axios";

export function WeatherDetails(){

    let context = useContext(CityContext);
    const [weatherData, setWeatherData] = useState({name:null, main:{temp:0}, weather:[{description:null}]});

    function LoadWeatherData(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${context}&appid=1318ca6725c69160d346c41fc0612596&units=metric`)
        .then(response=> {
            setWeatherData(response.data);
        })
    }

    useEffect(()=>{
        
        LoadWeatherData();

    },[context])

    return(
        <div className="bg-light mt-5 text-center shadow shadow-lg p-4">
            <div>
                <h3>{weatherData.name}</h3>
            </div>
            <div>
                <div className="fs-1 fw-bold">{weatherData.main.temp} &deg; </div>
                <div className="mt-2"> {weatherData.weather[0].description} </div>
            </div>
        </div>
    )
}