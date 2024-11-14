import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicles = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.obtenerInfoVehiculos(theid)
	}, [])
	return (
		<div className="container">
			<div className="d-flex">
				<div className="col-4">
					<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + theid + ".jpg"} className="img-fluid rounded-start" alt="..." />
				</div>

				<div className="card mb-3 text-light mx-auto col-8" style={{ maxWidth: "700px", backgroundColor: "rgb(255,255,255,0.1)" }}>
					<div className="row g-0">

						<div className="col-md-8 mx-auto">
							<div className="card-body text-center">
								<h5 className="card-title fs-1 text-warning">{store.vehicle?.properties?.name}</h5>
								<p className="card-text"><span className="text-warning">Cargo capacity:</span> {store.vehicle?.properties?.cargo_capacity}</p>
								<p className="cart-text"><span className="text-warning">Cost in credits:</span> {store.vehicle?.properties?.cost_in_credits}</p>
								<p className="cart-text"><span className="text-warning">Passengers:</span> {store.vehicle?.properties?.passengers}</p>
								<p className="cart-text"><span className="text-warning">Manufacturer:</span> {store.vehicle?.properties?.manufacturer}</p>
								<p className="cart-text"><span className="text-warning">Crew:</span> {store.vehicle?.properties?.crew}</p>
								<p className="cart-text"><span className="text-warning">Vehicle class:</span> {store.vehicle?.properties?.vehicle_class}</p>

							</div>
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
