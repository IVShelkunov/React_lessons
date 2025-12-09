import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/authSlice";

export function Layout() {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(state => state.auth.isAuth)
	return (
		<div className="layout">
			<header>
				<h1>Task Manager</h1>
				<nav>
					{isAuth && <button onClick={() => dispatch(logout())}>Выйти</button>}
				</nav>
			</header>
			<main><Outlet/></main>
			<footer> Ilya Shelkunov 2025 ©</footer>
		</div>
	);
}