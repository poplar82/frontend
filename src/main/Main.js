import {Link} from "react-router-dom";
import {useEffect} from "react";

function Main(props) {
    useEffect( () => {
            props.onSubmit({title: "Main"});
        }
    )
    return (
        <div className="container main">
            <h1>Projects:</h1>
            <ul>
                <Link to="/cars">
                    <li>Cars app - homework week 4</li>
                </Link>
                <Link to="/weather">
                    <li>Weather app - homework week 5</li>
                </Link>
                <Link to="/aspect">
                    <li>Aspect app - homework week 6</li>
                </Link>
            </ul>
        </div>
    );
}

export default Main;
