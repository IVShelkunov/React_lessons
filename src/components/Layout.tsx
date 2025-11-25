import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Layout() {
	const {user , logout} = useAuth();
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
					{user && <NavLink to={'/dashboard'}>Админка</NavLink>}
					{user ? <button onClick={logout}>Выйти</button> : <Link className="login-link" to={'/login'}>Войти</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2025 ©</footer>
		</div>
	);
}