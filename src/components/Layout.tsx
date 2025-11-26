import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Layout() {
	const {currentUser , logout} = useAuth();
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/projects'}>Наши проекты</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
					{currentUser ? <button onClick={logout}>Выйти</button> : <Link className="login-to" to={'/login'}>Вход</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2025 ©</footer>
		</div>
	);
}