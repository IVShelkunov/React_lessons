import { Outlet } from "react-router-dom";

export const Layout = () => {

	return(
		<div className="layout">
			<header>Посты</header>
			<main><Outlet/></main>
		</div>
	);
}