import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.obtenerInfoPersonaje(theid)
	}, [])
	return (
		<div className="container">
			<div className="d-flex">
				<div className="col-4">
					<img src={"https://starwars-visualguide.com/assets/img/characters/" + theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="card text-light mx-auto col-8" style={{ maxWidth: "700px", backgroundColor: "rgb(255,255,255,0.1)" }}>
					<div className="row g-0">
						<div className="col-md-8 mx-auto">
							<div className="card-body text-center mt-5">
								<h5 className="card-title fs-1 text-warning">{store.person.properties?.name}</h5>
								<p className="card-text text-info">{store.person.description}</p>
								<p className="card-text"><span className="text-warning">Gender:</span> {store.person.properties?.gender}</p>
								<p className="cart-text"><span className="text-warning">Birth year:</span> {store.person?.properties?.birth_year}</p>
								<p className="cart-text"><span className="text-warning">Eye color:</span>{store.person?.properties?.eye_color}</p>
								<p className="cart-text"><span className="text-warning">Hair color:</span> {store.person?.properties?.hair_color}</p>
								<p className="cart-text"><span className="text-warning">Height:</span> {store.person?.properties?.height}</p>
								<p className="cart-text"><span className="text-warning">Mass:</span> {store.person?.properties?.mass}</p>
								<p className="cart-text"><span className="text-warning">Skin color:</span> {store.person?.properties?.skin_color}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
