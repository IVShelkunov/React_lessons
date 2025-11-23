import { useState } from "react";
import type { User } from "../types/types";
import { useAuth } from "../contexts/auth";

export function LoginPage() {
	const {login} = useAuth();
	const [userData , setUserData] = useState<User>({name: '' , role: 'user'});
	const handleChangeLoginForm = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setUserData(prevData => ({...prevData , [e.target.id]: e.target.value}));
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(userData);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Имя пользователя:</label>
			<input type="text" id="name" value={userData.name} onChange={handleChangeLoginForm}/>
			<select id="role" onChange={handleChangeLoginForm}>
				<option value='user'>Пользователь</option>
				<option value='admin'>Администратор</option>
			</select>
			<button type="submit">Войти</button>
		</form>
	);
}