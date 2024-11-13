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
			<div className="card mb-3 text-light mx-auto" style={{ maxWidth: "700px", backgroundColor:"rgb(255,255,255,0.1)"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.person.properties?.name}</h5>
							<p className="card-text">{store.person.description}</p>
							<p className="card-text">gender: {store.person.properties?.gender}</p>
							<p className="cart-text"> birth year: {store.person?.properties?.birth_year}</p>
							<p className="cart-text">eye_color: {store.person?.properties?.eye_color}</p>
							<p className="cart-text">hair_color: {store.person?.properties?.hair_color}</p>
							<p className="cart-text">height: {store.person?.properties?.height}</p>
							<p className="cart-text">mass: {store.person?.properties?.mass}</p>
							<p className="cart-text">skin color: {store.person?.properties?.skin_color}</p>
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
