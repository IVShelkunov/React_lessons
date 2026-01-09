import { NavLink, Outlet } from "react-router-dom";
import '../App.css'
export const Layout = () => {
	return (
		<div className="layout">
			<header>
				<h1>IT-конференция 2026</h1>
				<nav>

					<NavLink to={'/'}>Зарегистрироваться</NavLink>
					<NavLink to={'/registrations'}>Все участники</NavLink>
				</nav>
				<main><Outlet/></main>
			</header>
		</div>
	);
}