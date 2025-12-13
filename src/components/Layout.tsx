import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { Cart } from "./cart";

export function Layout() {
	const favoritesList = useAppSelector(state => state.favorites.items);
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Каталог</NavLink>
					<NavLink to={'/favorites'}>Избранное({favoritesList.length})</NavLink>
				</nav>
			</header>
				<Cart/>
				<main><Outlet/></main>
		</div>
	);
}