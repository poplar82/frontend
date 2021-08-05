import {useEffect, useState} from "react";
import logo from "../logo.png";
import {addCar, editCar, getCarById} from "../Requests/carsRequests";
import {useHistory} from "react-router-dom";

function Car(props) {
    useEffect(() => {
        props.onSubmit({title: logo});
        if(props.car > 0) {
            fetchAndRenderCars(props.car);
        }
    }, []);
    const [car, setCar] = useState({
        id: 0,
        mark: "",
        model: "",
        color: "",
        yearOfProduction: ""
        }
    );
    const history = useHistory();
    const fetchAndRenderCars = async id => {
        setCar(await getCarById(id).then(data => data.data));
    };
    const handleCancel = () => () => {
        history.go(-1);
    }
    const handleAccept = () => () => {
        if (car.id === 0) {
            addCar(car).then((response) => {
                console.log(response.status);
            }, (error) => { console.log(error)
            });
        } else {
            editCar(car).then((response) => {
                console.log(response.status);
                }, (error) => { console.log(error)
            });
        }
        history.push("/cars");
    }

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>Car id:</label>
                    </td>
                    <td>
                        <input
                            onChange={event => {
                            setCar({...car, model: event.target.value});
                        }} value={car.id} disabled type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Mark:</label>
                    </td>
                    <td>
                        <input
                            onChange={event => {
                            setCar({...car, mark: event.target.value});
                        }}
                               value = {car.mark}
                               type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Model: </label>
                    </td>
                    <td>
                        <input
                            onChange={event => {
                            setCar({...car, model: event.target.value});
                        }}
                               value={car.model}
                               type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Color:</label>
                    </td>
                    <td>
                        <input
                            onChange={event => {
                            setCar({...car, color: event.target.value.toUpperCase()});
                        }}
                               value={car.color}
                               type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Year:</label>
                    </td>
                    <td>
                        <input
                            onChange={event => {
                            setCar({...car, yearOfProduction: event.target.value});
                        }}
                               value={car.yearOfProduction}
                               type="text"/>
                    </td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleCancel()}>Cancel</button>
            <button onClick={handleAccept()}>Accept</button>
        </>
    );
}

export default Car;
