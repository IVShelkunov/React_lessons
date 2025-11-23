import { useState } from "react";
import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();
	const {login} = useAuth();
	const [inputValue , setInputValue] = useState('');
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(inputValue);
		navigate('/account');
	}
	return (
		<form className="login" onSubmit={handleSubmit}>
			<input type="text" placeholder="введите имя" value={inputValue} onChange={handleChangeInputValue}/>
			<button type="submit" disabled={inputValue === ''} >Войти</button>
		</form>
	);
}