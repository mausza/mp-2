export interface WeatherData {
    hourly: {
        temperature_2m: string[];
        precipitation_probability: number[];
        visibility: number[];
    };
}