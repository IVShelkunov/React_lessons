import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/authSlice";
import '../App.css'
export const Layout = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const dispatch = useAppDispatch();
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink className="app-nav-link" to={'/'}>Главная</NavLink>
					<NavLink className="app-nav-link" to={'/profile'} end>Профиль</NavLink>
					{isAuth ? <button onClick={() => dispatch(logout())}>Выйти</button>: <Link className="app-nav-link login-link" to={'/login'}>Вход</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2026 Ⓒ</footer>
		</div>
	);
}