import {useEffect, useState} from "react";
import {getWeatherForCity} from "./weatherRequest";
import {Link} from "react-router-dom";

import "./weather.css"

function Weather(props) {
    useEffect(() => {
            props.onSubmit({title: "Weather"});
            fetchAndRenderWeather();
        }, []
    );
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState("");
    const fetchAndRenderWeather = async city => {
        setWeather(await getWeatherForCity(city).then(data => {
            return data.data;
        }));
        setLocation("");
    }

    function onClick() {
        if (location.length >= 3) {
            fetchAndRenderWeather(location);
        }
    }

    const co = Math.round(weather.co * 100) / 100;
    const no2 = Math.round(weather.no2 * 100) / 100;
    const o3 = Math.round(weather.o3 * 100) / 100;
    const so2 = Math.round(weather.so2 * 100) / 100;
    const pm25 = Math.round(weather.pm25 * 100) / 100;
    const pm10 = Math.round(weather.pm10 * 100) / 100;
    return (
        <div className="container main">
                <input
                    onChange={event => {
                        setLocation(event.target.value);
                    }}
                    name="location"
                    value={location}
                    type="text"/>
                <button onClick={onClick}>
                    Search location
                </button>
                <div className="card">
                    <div className="flex">
                        <div>
                            <div>{weather.locationCity} ({weather.locationCountry})</div>
                            <div className="grade">{weather.currentTempC}&deg;C</div>
                            <div>feels like: {weather.currentFeelsLikeC}&deg;C</div>
                            <div>wind: {weather.currentWindKM}km/h {weather.currentWindDir}</div>
                            <div>pressure: {weather.currentPressureMB}hPa</div>
                            <div>humidity: {weather.currentHumidity}%</div>
                        </div>
                        <div>
                            <img className="icon" src={weather.currentConditionIcon}/>
                            <div>{weather.currentConditionText}</div>
                            <div>precip: {weather.currentPrecipMM}</div>
                            <div>uv: {weather.currentUV}</div>
                        </div>
                    </div>
                    <div>Air condition:</div>
                    <div className="flex">
                        <div>
                            <div>CO: {co}</div>
                            <div>NO2: {no2}</div>
                            <div>O3: {o3}</div>
                        </div>
                        <div>
                            <div>SO2: {so2}</div>
                            <div>PM2.5: {pm25}</div>
                            <div>PM10: {pm10}</div>
                        </div>
                    </div>
                </div>
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
        </div>

    );
}

export default Weather;
