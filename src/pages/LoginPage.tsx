import { useState } from "react";
import type { User } from "../types/types";
import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();
	const {login} = useAuth();
	const [userData , setUserData] = useState<User>({name: '' , role: 'user'});
	const handleChangeLoginForm = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setUserData(prevData => ({...prevData , [e.target.id]: e.target.value}));
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(userData);
		navigate('/');
	}
	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label htmlFor="name">Имя пользователя:</label>
			<div>
				<input type="text" id="name" value={userData.name} onChange={handleChangeLoginForm}/>
				<select id="role" onChange={handleChangeLoginForm}>
					<option value='user'>Пользователь</option>
					<option value='admin'>Администратор</option>
				</select>
			</div>
			<div>
				<button type="submit">Войти</button>
			</div>
		</form>
	);
}