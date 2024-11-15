import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css"

export const Navbar = () => {
	const{store,actions}= useContext(Context)
	return (
		<nav className="navbar navbar-light mb-3" style={{backgroundColor:"rgb(225,225,225,0.1)"}}>
	
				<Link to="/">
					<span className="navbar-brand mb-0 h1 p-2 text-light">Star Wars</span>
				</Link>
				<div className="me-5">
					<div className="nav-item dropdown">
						<a className="nav-link dropdown-toggle text-light"
							href="#" role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false" >
							Favoritos</a>
						<ul className="dropdown-menu me-5 mt-2" style={{backgroundColor:"rgb(255,255,255,0.1"}} >
							{store.misFavoritos.map((item, id) => (
								<li key={id} className="">
									<a className="dropdown-item-center text-light d-flex justify-content-around align-items-center me-2" onClick={() => actions.favoritos(item)}>
										{item} <i class="fa fa-trash float-end"></i></a>
								</li>))}
						</ul>
					</div>
				</div>
			
		</nav>
	);
};
