import axios from 'axios';

export const getCarById = id => {
    return axios.get(`https://cars-app2.herokuapp.com/cars/${id}`);
}
export const addCar = car => {
    return axios.post(`https://cars-app2.herokuapp.com/cars/`, car);
}
export const editCar = car => {
    return axios.put(`https://cars-app2.herokuapp.com/cars/`, car);
}

export const deleteCarById = id => {
    return axios.delete(`https://cars-app2.herokuapp.com/cars/${id}`);
}
