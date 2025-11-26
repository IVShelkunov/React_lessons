import { useState } from "react";
import { useAuth } from "../contexts/auth";
import type { UserLoginData } from "../types/types";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const initialData = {username:'' , password: ''}
	const {users, login} = useAuth();
	const navigate = useNavigate();
	const [inputData , setInputData] = useState<UserLoginData>(initialData);
	const [showPass , setShowPass] = useState(false);
	const [error , setError] = useState<string | null>(null);
	const handleChangeInputData = (e:React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.type === 'checkbox') {
			setShowPass(e.target.checked);
		} else {
			setInputData(prev => ({...prev,[e.target.id]: e.target.value}));
		}
		
	};
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isValidUserName = users.map(user => user.authentication.username === inputData.username).includes(true);
		const isValidPassword = users.map(user => user.authentication.password === inputData.password).includes(true);
		if(isValidUserName && isValidPassword) {
			login(inputData);
			navigate('/');
			setInputData(initialData);
		} else {
			setError('Неверный логин или пароль!');
		}
	}
	
	return (
		<form className="login-form" onSubmit={handleSubmit} noValidate>
			<div className="form-group">
				<label htmlFor="username">Логин:</label>
				<input type="text" id="username" value={inputData.username} onChange={handleChangeInputData}/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Пароль:</label>
				<input type={showPass ? "text" : "password"} id="password" value={inputData.password} onChange={handleChangeInputData}/>
			</div>
			<div className="form-group">
				<label className="show" htmlFor="show">{showPass ? 'скрыть пароль' : 'показать пароль'}</label>
				<input id="show" type="checkbox" onChange={handleChangeInputData}/>
				{error && <p className="error">{error}</p>}
			</div>
			<div className="form-group">
				<button type="submit">Войти</button>
			</div>
		</form>
	);
}