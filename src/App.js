import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Weather from "./weather/Components/Weather";
import Aspect from "./aspect/components/Aspect";
import CarsMain from "./cars/components/CarsMain";
import {useState} from "react";
import Car from "./cars/components/Car";

function App() {
    const [title, setTitle] = useState({
            title: "logo"
        }
    );
    const [car, setCar] = useState([]);
    function updateState(newTitle) {
        setTitle(newTitle)
    }
    function openCar(newCar) {
        setCar(newCar);
    }
    return (
        <Router>
            <Nav title={title.title} />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Main onSubmit={updateState} />
                    </Route>
                    <Route path="/weather">
                        <Weather onSubmit={updateState} />
                    </Route>
                    <Route path="/aspect">
                        <Aspect onSubmit={updateState} />
                    </Route>
                    <Route exact path="/cars">
                        <CarsMain onSubmit={updateState} openCar={openCar} />
                    </Route>
                    <Route path="/cars/car/">
                        <Car car={car} onSubmit={updateState} />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
