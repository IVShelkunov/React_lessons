import { NavLink, Outlet } from "react-router-dom";

export function DashboardLayout() {
	return (
		<div className="dashboard-layout">
			<aside>
				<nav>
					<NavLink to={'.'} end>Аналитика</NavLink>
					<NavLink to={'users'}>Пользователи</NavLink>
					<NavLink to={'/'}>Вернуться на сайт</NavLink>
				</nav>
			</aside>
			<main><Outlet/></main>
		</div>
	);
}