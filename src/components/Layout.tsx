import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Layout() {
	const {user , logout} = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		navigate('/');
		logout();
		
	}
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
					{user && <NavLink to={'/dashboard'}>Админка</NavLink>}
					{user ? <button onClick={handleLogout}>Выйти</button> : <Link className="login-link" to={'/login'}>Войти</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2025 ©</footer>
		</div>
	);
}