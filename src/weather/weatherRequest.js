import axios from "axios";

export const getWeatherForCity = city => {
    return axios.get(`http://localhost:8080/weather/${city}`);
}
export const getWeatherHistory = () => {
    return axios.get("http://localhost:8080/weather/history");
}
