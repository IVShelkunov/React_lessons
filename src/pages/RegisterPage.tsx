import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type RegisterFormValues } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { IUser } from "../types/user";
import { regUser } from "../api/userApi";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {register,handleSubmit,formState:{errors},setError,watch} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema)
	});
	const showPass = watch('showPassword');
	const registerMutation = useMutation({
		mutationFn: (regData: Omit<IUser , 'id'>) => regUser(regData),
		onSuccess: (user) => {
			dispatch(login(user));
			navigate('/');
		},
		onError: (error) => {
			setError('email',{message: error.message});
		}
	});
	const onSubmit: SubmitHandler<RegisterFormValues> = async (regData: RegisterFormValues) => {
		const {showPassword , confirmPassword,...dataToSend} = regData;
		await registerMutation.mutateAsync(dataToSend);
	}
	return(
		<div className="registration">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>имя:</label>
					<input type="text"{...register('firstName')}/>
					{errors.firstName && <div className="error">{errors.firstName.message}</div>}
				</div>
				<div>
					<label>фамилия:</label>
					<input type="text"{...register('lastName')}/>
					{errors.firstName && <div className="error">{errors.firstName.message}</div>}
				</div>
				<div>
					<label>email:</label>
					<input type="email"{...register('email')}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div>
					<label>пароль:</label>
					<input type={showPass ? 'text': 'password'}{...register('password')}/>
					{errors.password && <div className="error">{errors.password.message}</div>}
				</div>
				<div>
					<label>подтвердите пароль:</label>
					<input type={showPass ? 'text': 'password'}{...register('confirmPassword')}/>
					{errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
				</div>
				<div>
					<label>показать пароль</label>
					<input type="checkbox"{...register('showPassword')}/>
				</div>
				{errors.root && <div className="error">{errors.root.message}</div>}
				<button type="submit">{registerMutation.isPending? 'Регистрируем': 'Зарегистрироваться'}</button>
			</form>
		</div>
	);
}