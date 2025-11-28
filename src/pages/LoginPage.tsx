import React, { useState } from "react";
import { useAuth } from "../contexts/auth";
import { users } from "../data/data";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();
	const {login} = useAuth();
	const [inputValue , setInputValue] = useState('');
	const [error , setError] = useState<string | null>(null);
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setError(null);
		setInputValue(e.target.value);
	}
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isValidName = users.map(user => user.name === inputValue).includes(true);
		if(isValidName) {
			login(inputValue);
			navigate('/profile');
		} else {
			setError('Неверное имя пользователя');
			}
	}
	return (
		<form className="login" onSubmit={handleSubmit}>
			<label>Введите имя</label>
			<input type="text" id="name" value={inputValue} onChange={handleChangeInputValue}/>
			{error && <p>{error}</p>}
			<button type="submit">Вход</button>
		</form>
	);
}