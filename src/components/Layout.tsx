import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/authSlice";
import '../App.css'
import { useQuery } from "@tanstack/react-query";
import { fetchTicketsByUserId } from "../api/ticketApi";
import { useId } from "react";

export const Layout = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const userId = useAppSelector(state => state.auth.user?.id)
	const {data} = useQuery({
		queryKey: ['tickets',userId],
		queryFn: () => fetchTicketsByUserId(userId!)
	});
	
	const dispatch = useAppDispatch();
	return (
		<div className="layout">
			<header>
				<nav>
					<NavLink className="app-nav-link" to={'/'}>Главная</NavLink>
					<NavLink className="app-nav-link" to={'/profile'} end>Профиль</NavLink>
					{isAuth && <NavLink className="app-nav-link" to={'/tickets'} end>Ваши заявки ({data && <span>{data.length}</span>})</NavLink>}
					<NavLink className="app-nav-link" to={'/create'} end>Создать заявку</NavLink>
					{isAuth ? <button onClick={() => dispatch(logout())}>Выйти</button>: <Link className="app-nav-link login-link" to={'/login'}>Вход</Link>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer>2026 Ⓒ</footer>
		</div>
	);
}