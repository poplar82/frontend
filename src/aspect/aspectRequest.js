import axios from "axios";

export const getAspect = address => {
    return axios.get(`http://localhost:8080/aspect/aspect/${address}`);
}
