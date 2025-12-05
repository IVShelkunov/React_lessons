import { NavLink, Outlet } from "react-router-dom";
import { useShowStore } from "../store/showStore";

export function Layout() {
	const favorites = useShowStore(state => state.favorites);
	return(
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Поиск</NavLink>
					<NavLink to={'/favorites'}>Избранное({favorites.length})</NavLink>
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2025 ©</footer>
		</div>
	);
}