import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext.js"
import CardPlanets from "../component/cardplanets";


export const Home = () => {

	const { store, actions } = useContext(Context) //traer useContext cuando quiero usar Flux

	const [people, setPeople] = useState([])
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err))
	}, [])




	return (
		<>
			<h1>Star Wars API </h1>
			<h2>Characters</h2>
			<div className="text-center mt-5  d-flex">
				{people.map((personaje, index) => {
					return (
						<Card key={index} name={personaje.name} uid={personaje.uid}></Card>
					)
				})
				}
			</div>
		</>)
};
