import {Link} from "react-router-dom";
import {useEffect} from "react";

function Main(props) {
    useEffect( () => {
            props.onSubmit({title: "Main"});
        }, []
    );
    return (
        <div className="container main">
            <h1>Projects:</h1>
            <ul>
                <Link to="/cars">
                    <li>Cars app - homework week 4 - so far it does not work in this version</li>
                </Link>
                <Link to="/weather">
                    <li>Weather app - homework week 5 - works but not well styled yet</li>
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
