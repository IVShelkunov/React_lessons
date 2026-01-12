import { NavLink, Outlet } from "react-router-dom";

export const LoginLayout = () => {
	return (
		<div className="login-layout">
			<main><Outlet/></main>
			<nav>
				<NavLink className="login-nav-link" to={'.'} end>Вход</NavLink>
				<NavLink className="login-nav-link" to={'registration'}>Регистрация</NavLink>
			</nav>
		</div>
	);
}