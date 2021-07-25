import {useEffect} from "react";

function Cars(props) {
    useEffect(() => {
            props.onSubmit({title: "Cars"});
        }, []);
    return (
        <div className="container main">
            Cars App
        </div>

    );
}

export default Cars;
