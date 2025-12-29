import { NavLink, Outlet } from "react-router-dom";
import '../App.css'
export const Layout = () => {
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Задачи</NavLink>
					<NavLink to={'/create'}>Добавить задачу</NavLink>
				</nav>
			</header>
				<main><Outlet/></main>
		</div>
	);
}