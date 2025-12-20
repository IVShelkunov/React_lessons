import { NavLink, Outlet } from "react-router-dom";

export function LoginLayout() {
	return (
		<div className="login-layout">
			<main><Outlet/></main>
			<nav>
				<NavLink to={'.'} end>Вход</NavLink>
				<NavLink to={'registration'}>Регистрация</NavLink>
				
			</nav>
		</div>
	);
}