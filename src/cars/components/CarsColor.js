import {useEffect, useState} from "react";
import {getColorCars} from "../Requests/carsRequests";
import {useParams} from "react-router";
import {Link, useHistory} from "react-router-dom";
import {deleteCarById} from "../Requests/carRequests";

function CarsColor(props) {
    let {carColor} = useParams();
    useEffect(() => {
        fetchAndRenderCars(carColor);
        },[carColor]);
    const [carsList, setCarsList] = useState([]);
    const history = useHistory();

    const fetchAndRenderCars = async carColor => {
        setCarsList(await getColorCars(carColor).then(data => data.data._embedded.cars));
    };

    const handleClickEdit = carId => () => {
        if ((carsList.find( car => {
                if (car.id.toString() === carId) {
                    props.onSubmit(car);
                }
                return null;
            }
        )) !== null) {
            history.push("/edit");
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
            <Link to={"/add"}><button>Add Car</button></Link>
        </>
    );
}

export default CarsColor;
