import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = (props) => { //utilizo operador ternario para solucionar error de la imagen//
    const { actions, store } = useContext(Context)
    const isFavorite = store.misFavoritos.includes(props.name)
    const url = props.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={url} className="card-img-top" alt="planets" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div>
                    <Link to={"/singlePlanet/" + props.uid}>
                        {/* esta es la ruta va el nombre del paht */}
                        {/* //Vincula a la pagina single con el id de veiculo// */}
                        <button className="btn btn-outline-dark float-start">learn more</button>
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