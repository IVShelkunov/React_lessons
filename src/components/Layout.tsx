import { NavLink } from "react-router-dom";
export function Layout() {
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
					<button></button> : <NavLink to={'/login'}>Вход</NavLink>
				</nav>
			</header>
			<main>Outlet</main>
			<footer>2025Ⓒ</footer>
		</div>
	);
}