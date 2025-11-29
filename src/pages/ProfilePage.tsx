import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function ProfilePage() {
	const {user} = useAuth();
		return (
			<div className="profile">
				<h1>Профиль пользователя {user.name}</h1>
				<aside>
					<nav>
						<NavLink to={'/profile'}>Мои посты</NavLink>
						<NavLink to={'/profile/create'}>Написать пост</NavLink>
					</nav>
				</aside>
				<main><Outlet/></main>
			</div>
		);
	
}