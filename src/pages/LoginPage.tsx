import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [inputValue , setInputValue] = useState('');
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(login(inputValue));
		navigate('/');
	}
	return (
		<div className="login-page">
			<h2>Вход в личный кабинет</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Введите имя" value={inputValue} onChange={handleChangeInputValue}/>
				<button type="submit" disabled={inputValue.trim() === ''}>Войти</button>
			</form>
		</div>
	);
}