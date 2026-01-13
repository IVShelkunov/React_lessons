import { NavLink, Outlet } from "react-router-dom";

export const ProfilePage = () => {
	return (
		<div className="profile">
			<aside>
				<nav>
					<NavLink to={'.'} end>Ваши данные</NavLink>
					<NavLink to={'posts'}>Ваши посты</NavLink>
					<NavLink to={'create'}>Новый пост ➕</NavLink>
				</nav>
			</aside>
			<main><Outlet/></main>
		</div>
	);
}