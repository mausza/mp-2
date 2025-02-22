import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {WeatherData} from "./interfaces/weather.ts";
import WeatherDisplay from './components/WeatherDisplay';

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px lightblue solid;
    background-color: antiquewhite;
    margin-top: 12%;
    
`

const Main_text = styled.h1`
    font-size: 2em;
    margin: auto;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 5%;
`



export default function App() {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    useEffect(() => {
        async function fetchWeather(): Promise<void>{
            const rawData = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=42.3584&longitude=-71.0598&hourly=temperature_2m,precipitation_probability,visibility&temperature_unit=fahrenheit&forecast_days=1"
            );
            const data: WeatherData = await rawData.json();
            setWeatherData(data);
        }
        fetchWeather()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);



    return(
        <ParentDiv>
            <Main_text>Here's the Weather For Boston:</Main_text>
            <WeatherDisplay data={weatherData} />
        </ParentDiv>
    );
}