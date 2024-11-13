import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {
    const{actions,store}=useContext(Context)
    const isFavorite=store.misFavoritos.includes(props.name)
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px", backgroundColor:"rgb(255,255,255,0.1)" }}>
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title text-light">{props.name}</h5>
                <Link to={"/singlevehicle/" + props.uid}>
                        
                        <button className="btn btn-outline-light float-start text-light">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-warning mx-2 float-end" onClick={()=> actions.favoritos(props.name)}>
                        <i className={`fa fa-heart ${isFavorite? "text-light":"text-warning"}`}></i>
                    </button>
            </div>
        </div>
    )
}

export default CardVehicles