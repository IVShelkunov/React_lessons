import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Layout() {
	const {user , logout} = useAuth();
	return(
		<div className="layout-site">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/blog'}>Блог</NavLink>
					{user && <NavLink to={'/profile'} >Профиль</NavLink>}
					{user? <button className="logout" onClick={logout}>Выйти</button> : <Link className="log" to={'/login'}>Войти</Link>}
				</nav>
			</header>
				<main><Outlet/></main>
				<footer>2025 ©</footer>
			
		</div>
	);
}