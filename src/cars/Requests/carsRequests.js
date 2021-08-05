import axios from 'axios';

export const getAllCars = () => {
    return axios.get("http://localhost:8080/cars");
}
export const getColorCars = color => {
    return axios.get(`http://localhost:8080/cars/color/${color}`);
}

export const getCarById = id => {
    return axios.get(`http://localhost:8080/cars/${id}`);
}
export const addCar = async car => {
    return axios.post(`http://localhost:8080/cars/`, car);
}
export const editCar = async car => {
    return axios.put(`http://localhost:8080/cars/`, car);
}

export const deleteCarById = id => {
    return axios.delete(`http://localhost:8080/cars/${id}`);
}
