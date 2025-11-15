import { NavLink } from "react-router-dom";

//Navigation.tsx
export function Navigation() {
	return (
		<nav>
			<NavLink to={'/'}>Главная</NavLink>
			<NavLink to={'/about'}>О нас</NavLink>
		</nav>
	);
}