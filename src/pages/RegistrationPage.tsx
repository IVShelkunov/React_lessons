import { useEffect, useState } from "react";
import { registerSchema, type RegisterFormValues } from "../schemas/authSchema";
import {useForm, type SubmitHandler} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useMutation } from "@tanstack/react-query";
import type { IParticipant, ITicket } from "../types/participant";
import { registerParticipant } from "../api/participantApi";
import { useNavigate } from "react-router-dom";


export const RegistrationPage = () => {
	const [onSuccess , setOnSuccess] = useState(false);
	const navigate = useNavigate();
	const registerMutate = useMutation({
		mutationFn: (registerData: Omit<IParticipant , 'id'>) => registerParticipant(registerData),
		onSuccess: () => {
			setOnSuccess(true)
		},
		onError: (e) => {
			setError('email', {message: e.message})
		}

	});

	const {register,handleSubmit,formState: {errors},setError,watch,setValue} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});
	const onSubmit:SubmitHandler<RegisterFormValues> = async (regData: RegisterFormValues) => {
		await registerMutate.mutateAsync(regData);
	}

	const ticketTypes: ITicket[] = ['standard' , 'student' , 'vip'];
	const ticketType = watch('ticketType');
	const showUniversityName = ticketType === "student";
	const showVipArea = ticketType === 'vip';
 	const handleFinish = () => {
 		setOnSuccess(false);
 		navigate('/registrations');
 	}
 	useEffect(() => {
 		if(ticketType === 'standard') {
 			setValue('universityName',undefined);
 			setValue('dietaryRestrictions',undefined);
 			setValue('airportTransfer',undefined);
 		}
 	} , [ticketType , setValue]);
	return (
		<div className="registration">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="fullName">Ваше полное имя:</label>
					<input id="fullName" type="text" {...register('fullName')}/>
					{errors.fullName && <div className="error">{errors.fullName.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="email">E-mail:</label>
					<input id="email" type="email" {...register('email')}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="age">Ваш возраст</label>
					<input id="age" type="number" {...register('age',{valueAsNumber:true})}/>
					{errors.age && <div className="error">{errors.age.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor=""></label>
					<select {...register('ticketType')}>
						{ticketTypes.map(ticket => (
							<option key={ticket} value={ticket}>{ticket}</option>
						))}
					</select>
				</div>
				{showUniversityName && (
					<div className="form-group">
						<label htmlFor="universityName">Университет:</label>
						<input id="universityName" type="text" {...register('universityName')}/>
						{errors.universityName && <div className="error">{errors.universityName.message}</div>}
					</div>
				)}
				{showVipArea && (

					<div className="form-group">
						<label htmlFor="dietaryRestrictions">Диетические ограничения:</label>
						<input id="dietaryRestrictions" type="text" {...register('dietaryRestrictions')}/>
						<label htmlFor="airportTransfer">Нужно такси</label>
						<input id="airportTransfer" type="checkbox" {...register('airportTransfer')}/>
					</div>
				)}
				<div className="form-group">
					<label htmlFor="isAgree">Я принимаю соглашение:</label>
					<input id="isAgree" type="checkbox" {...register('isAgree')}/>
					{errors.isAgree && <div className="error">{errors.isAgree.message}</div>}
				</div>
				<button type="submit">Зарегистрироваться</button>
			</form>
			{onSuccess && (
				<div className="owerlay-modal">
					<div className="modal-content">
						<h3>Ваша регистрация прошла успешно!</h3>
						<button onClick={handleFinish}>Ok</button>
					</div>
				</div>
			)}
		</div>
	);
}