import {useEffect, useState} from "react";
import {getCarById} from "../../Requests/carRequests";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

function Car() {
    let {carId} = useParams();
    useEffect(() => {
        fetchAndRenderCar(carId)
    }, [carId]);
    const [carDetails, setCarDetails] = useState({});

    const fetchAndRenderCar = async ID => {
        setCarDetails(await getCarById(ID).then(data => {
            return data.data;
        }));
    }
    return (
        <>
            <ul>
                <li className="cars_column">
                    <div id="id_column">Id</div>
                    <div>Mark</div>
                    <div>Model</div>
                    <div>Color</div>
                    <div>Year</div>
                </li>
                {
                    <li className="cars_column">
                        <div id="id_column">{carDetails.id}</div>
                        <div className="column">{carDetails.mark}</div>
                        <div className="column">{carDetails.model}</div>
                        <div className="column">{carDetails.color}</div>
                        <div className="column">{carDetails.yearOfProduction}</div>
                    </li>
                }
            </ul>
            <Link to={`/`}>
                <Button label="Back" />
            </Link>
        </>
    );
}

export default Car;
