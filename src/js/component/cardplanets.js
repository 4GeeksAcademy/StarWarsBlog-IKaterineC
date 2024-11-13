import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => { //utilizo operador ternario para solucionar error de la imagen//
    const { actions, store } = useContext(Context)
    const isFavorite = store.misFavoritos.includes(props.name)
    //la img del primer planeta no aparecía por ello usamos el ternario
    const url = props.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px", backgroundColor:"rgb(255,255,255,0.1)"}}>
            {/* sustituimos img con la variable que contiene el operador ternario */}
            <img src={url} className="card-img-top" alt="planets" />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div>
                    <Link to={"/singlePlanet/" + props.uid}>
                        <button className="btn btn-outline-light float-start">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-warning mx-2 float-end" onClick={() => actions.favoritos(props.name)}>
                        <i className={`fa fa-heart ${isFavorite ? "text-dark" : "text-warning"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlanets