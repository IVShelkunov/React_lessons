//Navigation.tsx
import { NavLink } from 'react-router-dom';
export function Navigation() {
return(
	<nav>
		<NavLink to={'/'}>Главная</NavLink>
		<NavLink to={'/projects'}>Мои проекты</NavLink>
		<NavLink to={'/contacts'}>Контакты</NavLink>
	</nav>
);
}