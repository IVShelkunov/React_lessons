import { useState } from "react";
import type { RegisterData } from "../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../api/user";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export function RegistrationPage() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();
	const [regData , setRegData] = useState<RegisterData>({
		name: '',
		email: '',
		bio: ''
	});
	const registerMutation = useMutation({
		mutationFn: () => registerUser(regData),
		onSuccess: (user) => {
			queryClient.invalidateQueries({queryKey: ['users']});
			dispatch(login(user.id));
			navigate('/profile');

		}
	});
	//обработчик нужен лишь один на все инпуты
	const handleChangeRegData = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegData(prev => ({...prev, [e.target.id]: e.target.value}));
	}
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		registerMutation.mutate()
	}
	const isValidate = regData.name.trim() !== '' && regData.email.trim() !== '' && regData.bio.trim() !== '';
	return (
		<div className="registration">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Имя</label>
				<input id="name" value={regData.name} onChange={handleChangeRegData}/>
				<label htmlFor="email">E-mail</label>
				<input id="email" value={regData.email} onChange={handleChangeRegData}/>
				<label htmlFor="bio">О себе</label>
				<input id="bio" value={regData.bio} onChange={handleChangeRegData}/>
				<button type="submit" disabled={!isValidate}>{registerMutation.isPending? 'Идет регистрация..': 'Зарегистрироваться'}</button>
			</form>
		</div>
	);
}