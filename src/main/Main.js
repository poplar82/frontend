import {Link} from "react-router-dom";
import {useEffect} from "react";
import logo from "../logo.png";

function Main(props) {
    useEffect( () => {
            props.onSubmit({title: logo});
        },[]);
    return (
        <div className="container main">
            <h1>Projects:</h1>
            <ul>
                <Link to="/cars">
                    <li>Cars app - homework week 4 and 7 - works but not well styled yet</li>
                </Link>
                <Link to="/weather">
                    <li>Weather app - homework week 5 and 8 - works but not well styled yet</li>
                </Link>
                <Link to="/aspect">
                    <li>Aspect app - homework week 6 - works but not well styled yet</li>
                </Link>
            </ul>
            <div>Website under construction</div>
        </div>
    );
}

export default Main;
