import {useEffect} from "react";
import {Link} from "react-router-dom";
import {getAspect} from "../aspectRequest";

function Aspect(props) {
    useEffect(() => {
        props.onSubmit({title: "Aspect"});
    }, []);
    function click() {
        getAspect(document.getElementById("address").value);
        alert("check your mailbox");
    }
    return (
        <div className="container main">
            <div>
                <div>Your email address is not remembered in any way.</div>
                <div>It is only used to send an email once.</div>
            </div>
            <div>
                <label>Enter email to test the aspect:</label>
                <input id="address" type="text"/>
                <button onClick={click}>TRY</button>
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>

    );
}

export default Aspect;
