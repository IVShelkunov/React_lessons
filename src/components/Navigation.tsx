import { NavLink } from "react-router-dom";

export function Navigation() {
	return (
		<nav>
			<NavLink to={'/'}>Главная</NavLink>
			<NavLink to={'/about'}>О нас</NavLink>
			<NavLink to={'/setting'}>Настройки</NavLink>
			<NavLink to={'/dashboard'}>Войти в админку</NavLink>
		</nav>
	);
}