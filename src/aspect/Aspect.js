import {useEffect} from "react";

function Aspect(props) {
    useEffect(() => {
        props.onSubmit({title: "Aspect"});
    }, []);
    return (
        <div className="container main">
            Aspect App
        </div>

    );
}

export default Aspect;
