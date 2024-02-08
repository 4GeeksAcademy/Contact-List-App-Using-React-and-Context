import React from "react";
import { Link } from "react-router-dom";
import getState from "../store/flux";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark mb-3">
			<div className="container-fluid justify-content-start"> 
			<Link to="/">
				<button className="btn btn-success mx-3">Home</button>
			</Link>
				<Link to="/form">
					<button className="btn btn-primary ">Add +</button>
				</Link>
				<Link to="/contact-list">
					<button className="btn btn-warning mx-3">Contact List</button>
				</Link>
			</div>
		</nav>
	);
};
