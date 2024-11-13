import CardVehicles from "../component/cardvehicles";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			misFavoritos: [],
			planets: [],
			person: {},
			planet: {},
			vehicles: [],

		},
		actions: {

			//traemos los personajes del banco de StarWars
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json() 
					setStore({ people: data.results })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			//metodo de agragar a favoritos
			favoritos:  (item) => {
				if(getStore().misFavoritos.includes(item)){
                let aux=[]
				aux=getStore().misFavoritos.filter((elemento)=>elemento!=item)
				setStore ({misFavoritos:aux})
				}else{
					setStore({misFavoritos:[...getStore().misFavoritos,item]})
				}
			},
			//obtenemos los planetas de la SWAPI de la misma forma que con los personajes
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					setStore({ planets: data.results })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			
			obtenerInfoPersonaje: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/"+id)
					const data = await response.json()
					 setStore({ person: data.result })
				console.log (data.result)
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerInfoPlanetas: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/"+id)
					const data = await response.json()
					 setStore({ planet: data.result })
				console.log (data.result)
				} catch (error) {
					console.log(error)
					return false
				}
			},
			obtenerVehiculos: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					const data = await response.json() //Transforma la info que llega del fetch en un objeto json//
					setStore({ vehicles: data.results }) //para que guarde en store para verlo de todos los archivos//
				} catch (error) {
					console.log(error)
					return false
				}
			},obtenerInfoVehiculos: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/"+id)
					const data = await response.json() 
					setStore({ vehicles: data.results }) 
					console.log (data.result)
				} catch (error) {
					console.log(error)
					return false
				}
			}
			
		}
	};
};

export default getState;

