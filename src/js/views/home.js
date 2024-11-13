import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import Card from "../component/card";
import { Context } from "../store/appContext" //para ver las funciones de flux debemos importar de esta forma//
import CardPlanets from "../component/cardplanets"; //asi importamos los componentes//


export const Home = () => {
	const { store, actions } = useContext(Context) //cada vez que quiero usar flux traer useContext, importar, traer {store,actions}// 
	// const {people} = store  si lo hicieramos asi le estamos diciendo "traeme solo el array de people"//
	useEffect(() => {
		actions.obtenerPersonajes()
		actions.obtenerPlanetas()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>API de Star Wars </h1>
			<h1 className="mt-4 mb-2">characters</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.people.map((item, index) => {
					return (
						<Card key={index} name={item.name} uid={item.uid} />
					)
				})
				}
			</div>
			<h1 className="mt-4 mb-2">planets</h1>
			<div className="d-flex flex-row overflow-scroll">
				{store.planets.map((item, index) => {
					return (
						<CardPlanets key={index} name={item.name} uid={item.uid} /> //agregue el componente//
					)
				})
				}
			</div>
	
		</div>
	)
};
