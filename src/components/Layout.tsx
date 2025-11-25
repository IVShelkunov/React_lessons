import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/projects'}>Наши проекты</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2025 ©</footer>
		</div>
	);
}