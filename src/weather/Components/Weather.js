import {useEffect, useState} from "react";
import {getWeatherForCity, getWeatherHistory} from "../weatherRequest";
import {Link} from "react-router-dom";
import logo from "../logo.png";

import "./weather.css"

function Weather(props) {
    useEffect(() => {
            props.onSubmit({title: logo});
        },[]);
    const [weather, setWeather] = useState({});
    const [weatherHistory, setWeatherHistory] = useState([]);
    const [location, setLocation] = useState("");
    const fetchAndRenderWeather = async city => {
        setWeather(await getWeatherForCity(city).then(data => {
            return data.data;
        }));
        setWeatherHistory(await getWeatherHistory().then(data => {
            return data.data;
        }));
        document.getElementById("card").style.visibility = "visible";
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
        <div className="container main flexrow">
            <div>
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
            </div>
            <div id="card" className="card visible">
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
                        <img alt="weather icon" className="icon" src={weather.currentConditionIcon}/>
                        <div>{weather.currentConditionText}</div>
                        <div>precip: {weather.currentPrecipitationMM}mm</div>
                        <div>UV index: {weather.currentUV}</div>
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
                <table className="temp_history">
                    <tr>
                        <th className="id_column">No</th>
                        <th className="temp_column">Temp</th>
                        <th className="time_column">Time</th>
                        <th className="date_column">Date</th>
                    </tr>
                    {
                        weatherHistory.map(data =>
                            <tr key={data.id}>
                                <td className="id_column" >{data.id}</td>
                                <td className="temp_column">{data.temperature}&deg;C</td>
                                <td className="time_column">{data.time}</td>
                                <td className="date_column">{data.date}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </div>

    );
}

export default Weather;
