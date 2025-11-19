import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { mockUser } from "../data/data";
import { Link } from "react-router-dom";
import '../App.css'
export function SettingsLayout() {
	const navigate = useNavigate();
	return (
		<div className="setting-layout">
			<header>Настройки для {mockUser.name}</header>
			<nav>
				<NavLink to={'.'} end>Профиль</NavLink>
				<NavLink to={'security'}>Безопасность</NavLink>
			</nav>
			<main>
				<Outlet context={mockUser}/>
			</main>
			<button className="btn" onClick={()=> navigate('/')}>На главную</button>
		</div>
	);
}