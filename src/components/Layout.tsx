import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
	return(
		<div className="layout-site">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/blog'}>Блог</NavLink>
				</nav>
				<main><Outlet/></main>
				<footer>2025 ©</footer>
			</header>
		</div>
	);
}