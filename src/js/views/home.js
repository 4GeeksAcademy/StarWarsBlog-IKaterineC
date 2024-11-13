import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import CardVehicles from "../component/cardvehicles";
import Card from "../component/card";
import { Context } from "../store/appContext" //para ver las funciones de flux debemos importar de esta forma//
import CardPlanets from "../component/cardplanets"; //asi importamos los componentes//


export const Home = () => {
	const { store, actions } = useContext(Context) //cada vez que quiero usar flux traer useContext, importar, traer {store,actions}// 
	// const {people} = store  si lo hicieramos asi le estamos diciendo "traeme solo el array de people"//
	useEffect(() => {
		actions.obtenerVehiculos()
		actions.obtenerPersonajes()
		actions.obtenerPlanetas()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1 className="text-light">API de Star Wars </h1>
			<h1 className="mt-4 mb-2 text-light">Characters</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.people.map((item, index) => {
					return (
						<Card key={index} name={item.name} uid={item.uid} />
					)
				})
				}
			</div>
			<h1 className="mt-4 mb-2 text-light">Planets</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.planets.map((item, index) => {
					return (
						<CardPlanets key={index} name={item.name} uid={item.uid} /> 
					)
				})
				}
			</div>

			<h1 className="mt-4 mb-2">vehicles</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.vehicles.map((item, index) => {
					return (
						<CardVehicles key={index} name={item.name} uid={item.uid} /> //agregue el componente//
					)
				})

				}
			</div>
	
		</div>
	)
};
