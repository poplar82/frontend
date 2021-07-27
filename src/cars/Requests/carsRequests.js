import axios from 'axios';

export const getAllCars = () => {
    return axios.get("https://cars-app2.herokuapp.com/cars");
}
export const getColorCars = color => {
    return axios.get(`https://cars-app2.herokuapp.com/cars/color/${color}`);
}
