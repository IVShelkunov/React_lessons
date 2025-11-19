import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import '../App.css'
export function Layout () {
	return (
		<div className="layout-site">
			<header><Navigation/></header>
			<main><Outlet/></main>
			<footer>2025©</footer>
		</div>
	);
}