import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicles = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.obtenerInfoVehicle(theid)
	}, [])
	return (
		<div className="container">
			<div className="card mb-3 text-light mx-auto" style={{ maxWidth: "700px", backgroundColor:"rgb(255,255,255,0.1)"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://www.swapi.tech/api/vehicles/" + theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.vehicle.properties?.name}</h5>
							<p className="card-text">Cargo capacity: {store.vechicle.properties?.cargo_capacity}</p>
							<p className="cart-text">Cost in credits: {store.vechicle?.properties?.cost_in_credits}</p>
							<p className="cart-text">Passengers: {store.vechicle?.properties?.passengers}</p>
							<p className="cart-text">Manufacturer: {store.vechicle?.properties?.manufacturer}</p>
							<p className="cart-text">Crew: {store.vechicle?.properties?.crew}</p>
							<p className="cart-text">Vehicle class: {store.vechicle?.properties?.vehicle_class}</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SingleVehicles.propTypes = {
	match: PropTypes.object
};
