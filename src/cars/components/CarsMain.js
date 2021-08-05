import {useEffect, useState} from "react";
import logo from "../logo.png";
import {Link, useHistory} from "react-router-dom";
import {deleteCarById, getAllCars, getColorCars} from "../Requests/carsRequests";
import "../cars.css";

function CarsMain(props) {
    useEffect(() => {
        props.onSubmit({title: logo});
        fetchAndRenderCars();
    }, []);
    const [carsList, setCarsList] = useState([]);
    const [color, setColor] = useState([]);
    const history = useHistory();

    const fetchAndRenderCars = async () => {
        setCarsList(await getAllCars().then(data => data.data._embedded.cars));
    };
    const handleClickEdit = carId => () => {
        if ((carsList.find(car => {
                if (car.id.toString() === carId) {
                    props.openCar(carId);
                }
                return null;
            }
        )) !== null) {
            history.push("/cars/car");
        }
    }
    const handleClickAdd = () => {
        props.openCar("0");
        history.push("/cars/car");
    }
    const handleClickDelete = carId => () => {
        deleteCarById(carId);
        history.go(0);
    }
    const handleClickSearch = color => async () => {
        setCarsList(await getColorCars(color).then(data => data.data._embedded.cars));
    }
   return (
        <>
            <div className="search">
                <label>Search by color: </label>
                <input onChange={event => {
                    setColor(event.target.value);
                }} type="text"/>
                <button onClick={handleClickSearch(color)}>Search</button>
            </div>
            <ul className="cars_list">
                <li className="cars_column flex header_list">
                    <div> Id</div>
                    <div>Mark</div>
                    <div>Model</div>
                    <div>Color</div>
                    <div>Year</div>
                    <div></div>
                </li>
                {
                    carsList.map(car =>
                        <li className="cars_column flex aa" key={car.id}>
                                    <div>{car.id}</div>
                                    <div>{car.mark}</div>
                                    <div>{car.model}</div>
                                    <div>{car.color}</div>
                                    <div>{car.yearOfProduction}</div>
                            <div className="flex">
                                <button onClick={handleClickEdit(`${car.id}`)}>Edit</button>
                                <button onClick={handleClickDelete(`${car.id}`)}>Delete</button>
                            </div>
                        </li>
                    )
                }
            </ul>
            <button onClick={handleClickAdd}>Add Car</button>
            <Link to={"/"}>
                <button>Back</button>
            </Link>
        </>
    )
}

export default CarsMain;
