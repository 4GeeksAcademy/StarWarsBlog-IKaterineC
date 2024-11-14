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
            <div className="d-flex">
                <div className="col-4">
                    <img src={theid == 1 ?
                        "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                        : "https://starwars-visualguide.com/assets/img/planets/" + theid + ".jpg"} className="img-fluid rounded-start" alt={store.planet?.properties?.name} />
                </div>
                <div className="card mb-3 mx-auto col-8" style={{ maxWidth: "800px", backgroundColor: "rgb(255,255,255,0.1)" }}>
                    <div className="row g-0">
                        <div className="col-md-8 mx-auto">
                            <div className="card-body text-light text-center mt-5">
                                <h5 className="card-title fs-1 text-warning">{store.planet?.properties?.name}</h5>                            
                                <p className="card-text text-info">{store.planet?.description}</p>
                                <p className="card-text"><span className="text-warning">Climate:</span> {store.planet?.properties?.climate}</p>
                                <p className="cart-text"><span className="text-warning">Diameter:</span> {store.planet?.properties?.diameter}</p>
                                <p className="cart-text"><span className="text-warning">Gravity:</span> {store.planet?.properties?.gravity}</p>
                                <p className="cart-text"><span className="text-warning">Orbital period:</span> {store.planet?.properties?.orbital_period}</p>
                                <p className="cart-text"><span className="text-warning">Population:</span> {store.planet?.properties?.population}</p>
                                <p className="cart-text"><span className="text-warning">Rotation period:</span> {store.planet?.properties?.rotation_period}</p>
                                <p className="cart-text"><span className="text-warning">Surface water:</span> {store.planet?.properties?.surface_water}</p>
                                <p className="cart-text"><span className="text-warning">Terrain:</span> {store.planet?.properties?.terrain}</p>
                            </div>
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
