import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.obtenerInfoPlanetas(theid)
    }, [])
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={theid == 1 ?
                            "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                            :"https://starwars-visualguide.com/assets/img/planets/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.planet?.properties?.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planet?.properties?.name}</h5>
                            {/* //los signos d epregunta significan que espere que se cargue la info// */}
                            <p className="card-text">{store.planet?.description}</p>
                            <p className="card-text">climate: {store.planet?.properties?.climate}</p>
                            <p className="cart-text"> diameter: {store.planet?.properties?.diameter}</p>
                            <p className="cart-text">gravity: {store.planet?.properties?.gravity}</p>
                            <p className="cart-text">orbital_period: {store.planet?.properties?.orbital_period}</p>
                            <p className="cart-text">population: {store.planet?.properties?.population}</p>
                            <p className="cart-text">rotation_period: {store.planet?.properties?.rotation_period}</p>
                            <p className="cart-text">surface_water: {store.planet?.properties?.surface_water}</p>
                            <p className="cart-text">terrain: {store.planet?.properties?.terrain}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};
