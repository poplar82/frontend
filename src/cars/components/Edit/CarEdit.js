import {useHistory} from "react-router";
import {useState} from "react";
import {editCar} from "../../Requests/carRequests";
import {Link} from "react-router-dom";

function CarEdit(props) {
    const [carToEdit, setCarToEdit] = useState( () => {
        return  props.objectCar;
        }
    );

    const history = useHistory();
    const editingCar = carToEdit => async () => {
        await editCar(carToEdit);
        history.push("/");
    }

    return (
        <>
            <div className="flex">
                <label className="label">Id</label>
                <input disabled onChange={event => {
                    setCarToEdit(prevState => {
                        return {...prevState, id: event.target.value}
                    });
                }}
                       value={carToEdit.id}
                       type="text"
                       name="id"
                />
            </div>
            <div className="flex">
                <label className="label">Mark</label>
                <input onChange={event => {
                    setCarToEdit(prevState => {
                        return {...prevState, mark: event.target.value}
                    });
                }}
                       value={carToEdit.mark}
                       type="text"
                       name="mark"
                />
            </div>
            <div className="flex">
                <label className="label">Model</label>
                <input onChange={event => {
                    setCarToEdit(prevState => {
                        return {...prevState, model: event.target.value}
                    });
                }}
                       value={carToEdit.model}
                       type="text"
                       name="model"
                />
            </div>
            <div className="flex">
                <label className="label">Color</label>
                <input onChange={event => {
                    setCarToEdit(prevState => {
                        return {...prevState, color: event.target.value.toUpperCase()}
                    });
                }}
                       value={carToEdit.color}
                       type="text"
                       name="color"
                />
            </div>
            <div className="flex">
                <label className="label">Year</label>
                <input onChange={event => {
                    setCarToEdit(prevState => {
                        return {...prevState, yearOfProduction: event.target.value}
                    });
                }}
                       value={carToEdit.yearOfProduction}
                       type="text"
                       name="year"
                />
            </div>
            <button onClick={editingCar(carToEdit)}>Ok</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </>
    );
}

export default CarEdit;
