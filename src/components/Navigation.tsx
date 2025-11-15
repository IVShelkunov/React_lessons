import { NavLink } from "react-router-dom";

//Navigation.tsx
export function Navigation() {
	return (
		<nav>
			<NavLink to={'/'}>Главная</NavLink>
			<NavLink to={'/create-post'}>Создать пост</NavLink>
			<NavLink to={'/about'}>О авторе</NavLink>
		</nav>
	);
}