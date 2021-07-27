import {useEffect, useState} from "react";
import {getAllCars} from "../Requests/carsRequests";
import {deleteCarById} from "../Requests/carRequests";
import {Link, useHistory} from "react-router-dom";

function Cars(props) {
    useEffect(() => {
        fetchAndRenderCars();
    }, []);
    const [carsList, setCarsList] = useState([]);
    const history = useHistory();

    const fetchAndRenderCars = async () => {
        setCarsList(await getAllCars().then(data => data.data._embedded.cars));
    };

    const handleClickEdit = carId => () => {
        if ((carsList.find( car => {
                if (car.id.toString() === carId) {
                    props.onSubmit(car);
                }
                return null;
            }
        )) !== null) {
            history.push("/cars/edit");
        }
    }

    const handleClickDelete = carId => () => {
        deleteCarById(carId);
        history.go(0);
    }

    return (
        <>
            <ul>
                <li className="cars_column">
                    <div id="id_column"> Id</div>
                    <div>Mark</div>
                    <div>Model</div>
                </li>
                {
                    carsList.map(car =>
                        <li key={car.id}>
                            <div className="cars_column">
                                <Link className="cars_column" to={`/cars/${car.id}`}>
                                    <div id="id_column">{car.id}</div>
                                    <div>{car.mark}</div>
                                    <div>{car.model}</div>
                                </Link>
                                <button onClick={handleClickEdit(`${car.id}`)}>Edit</button>
                                <button onClick={handleClickDelete(`${car.id}`)}>Delete</button>
                            </div>
                        </li>
                    )
                }
            </ul>
            <Link to={"/cars/add"}><button>Add Car</button></Link>
        </>
    );
}

export default Cars;
