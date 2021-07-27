import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Cars from "./cars/CarsMain";
import Weather from "./weather/Components/Weather";
import Aspect from "./aspect/components/Aspect";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState({
            title: "Projects"
        }
    );
    function updateState(newTitle) {
        setTitle(newTitle)
    }
    return (
        <Router>
            <Nav title={title.title}/>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Main onSubmit={updateState}/>
                    </Route>
                    <Route path="/cars">
                        <Cars onSubmit={updateState}/>
                    </Route>
                    <Route path="/weather">
                        <Weather onSubmit={updateState}/>
                    </Route>
                    <Route path="/aspect">
                        <Aspect onSubmit={updateState}/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
