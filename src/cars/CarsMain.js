import Cars from "./components/Cars";
import Car from "./components/Car/Car";
import CarsColor from "./components/CarsColor";
import CarAdd from "./components/Add/CarAdd";
import CarEdit from "./components/Edit/CarEdit";
import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./cars.css";

function CarsMain(props) {
    useEffect(() => {
        props.onSubmit({title: "Cars"});
    }, []);
    const [car, setCar] = useState({
            id: "10",
            mark: "",
            model: "",
            color: "",
            yearOfProduction: ""
        }
    );

    function updateState(newCar) {
        setCar(newCar);
    }

    return (
        <Router>
            <main>
                <div className="container">
                    <Switch>
                        <Route exact path="/cars">
                            <Cars onSubmit={updateState} />
                        </Route>
                        <Route exact path="/cars/:carId" component={Car} />
                        <Route exact path="/cars/color/:carColor">
                            <CarsColor onSubmit={updateState} />
                        </Route>
                        <Route exact path="/cars/add" component={CarAdd} />
                        <Route exact path="/cars/edit">
                            <CarEdit objectCar={car} />
                        </Route>
                    </Switch>
                </div>
            </main>
        </Router>

    );
}

export default CarsMain;
