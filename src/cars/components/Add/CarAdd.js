import {addCar} from "../../Requests/carRequests";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";

function CarAdd() {
    const [car, setCar] = useState({
        id: "",
        mark: "",
        model: "",
        color: "",
        yearOfProduction: ""
        }
        );
    const history = useHistory();
    const addingCar = car => async () => {
        await addCar(car);
         history.push("/");
    }

    return (
        <>
                <div className="flex">
                    <label className="label">Id</label>
                    <input onChange={event => {
                        setCar(prevState => {
                            return {...prevState, id: event.target.value}
                        });
                    }}
                           value={car.id}
                           type="text"
                           name="id"
                    />
                </div>
                <div className="flex">
                    <label className="label">Mark</label>
                    <input  onChange={event => {
                        setCar(prevState => {
                            return {...prevState, mark: event.target.value}
                        });
                    }}
                           value={car.mark}
                           type="text"
                           name="mark"
                    />
                </div>
                <div className="flex">
                    <label className="label">Model</label>
                    <input onChange={event => {
                        setCar(prevState => {
                            return {...prevState, model: event.target.value}
                        });
                    }}
                           value={car.model}
                           type="text"
                           name="model"
                    />
                </div>
                <div className="flex">
                    <label className="label">Color</label>
                    <input onChange={event => {
                        setCar(prevState => {
                            return {...prevState, color: event.target.value.toUpperCase()}
                        });
                    }}
                           value={car.color}
                           type="text"
                           name="color"
                    />
                </div>
                <div className="flex">
                    <label className="label">Year</label>
                    <input onChange={event => {
                        setCar(prevState => {
                            return {...prevState, yearOfProduction: event.target.value}
                        });
                    }}
                           value={car.yearOfProduction}
                           type="text"
                           name="year"
                    />
                </div>
            <button onClick={addingCar(car)}>Add</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </>
    );
}

export default CarAdd;
