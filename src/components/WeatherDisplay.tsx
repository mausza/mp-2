import styled from "styled-components";
import {WeatherData} from "../interfaces/weather.ts";

const WeatherDiv = styled.div`
    width: 30vw;
    height: 30vh;
    margin: auto;
`

const StyledParagraph = styled.p`
  color: darkblue;
  font-size: 1.25rem;
  margin: auto;
  text-align: center;
  padding-top: 1.25rem;  
`;

interface WeatherDisplayProps {
    data: WeatherData | null;
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
    if (!data) {
        return (
            <WeatherDiv>
                <p>Loading weather data...</p>
            </WeatherDiv>
        );
    }

    const firstHourTemp = data.hourly.temperature_2m[0];
    const firstHourPrecip = data.hourly.precipitation_probability[0];
    const firstHourVisibility = data.hourly.visibility[0];

    return (
        <WeatherDiv>
            <StyledParagraph>Current Temperature: {firstHourTemp} °F</StyledParagraph>
            <StyledParagraph>Precipitation Probability: {firstHourPrecip}%</StyledParagraph>
            <StyledParagraph>Visibility: {firstHourVisibility} m</StyledParagraph>
        </WeatherDiv>
    );
}