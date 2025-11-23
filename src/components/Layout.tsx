import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function Layout() {
	const {user , logout} = useAuth();
	return (
		<div className='layout'>
			<header>
				<nav>
					<NavLink to={'/'}>Главная</NavLink>
					{user && <NavLink to={'account'}>Кабинет</NavLink>}
					{user ? <button onClick={logout}>Выйти</button> : <NavLink className='login-link' to={'/login'}>Войти</NavLink> }
				</nav>
			</header>
			<main>
				<Outlet/>
			</main>
		</div>
	);
}