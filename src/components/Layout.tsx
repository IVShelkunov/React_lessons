import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/authSlice";


export const Layout = () => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(state => state.auth.isAuth);
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					<NavLink to={'/posts'}>Все посты</NavLink>
					<NavLink to={'/profile'}>Профиль</NavLink>
					{isAuth ? <button onClick={() => dispatch(logout())}>Выйти</button>:<Link to={'/login'}>Вход</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2026 ©</footer>
		</div>
	);
}