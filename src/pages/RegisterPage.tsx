import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IUser } from "../types/user";
import { registerUser } from "../api/authApi";
import { useAppDispatch } from "../store/hooks";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { registerSchema, type RegisterFormValues } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterPage = () => {
	
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const regMutate = useMutation({
		mutationFn: (regData:Omit<IUser ,'id'>) => registerUser(regData),
		onSuccess: (user) => {
			dispatch(setCredentials(user));
			navigate('/profile');
		}
	});
	const {register , handleSubmit , formState: {errors} , watch,setError} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema)
	});
	const onSubmit: SubmitHandler<RegisterFormValues> = async (regData: RegisterFormValues) => {
		try {
			const {name,email,password} = regData;
			await regMutate.mutateAsync({name,email,password});
		} catch(err) {
			if(err instanceof Error) {
				setError('root' , {message: err.message});
			}
		}
	}
	const showPassword = watch('showPassword');
	
	return (
		<div className="register">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="name">введите имя:</label>
					<input id="name" type="text" {...register('name')}/>
					{errors.name && <div className="error">{errors.name.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="email">введите email:</label>
					<input id="email" type="email" {...register('email')}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="password">придумайте пароль:</label>
					<input id="password" type={showPassword? 'text': 'password'} {...register('password')}/>
					{errors.password && <div className="error">{errors.password.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">введите пароль еще раз:</label>
					<input id="confirmPassword" type={showPassword? 'text': 'password'} {...register('confirmPassword')}/>
					{errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
				</div>
				<div className="form-group">
					<label style={{display:'inline-block'}} htmlFor="showPass">{showPassword ? 'скрыть' : 'показать'} пароль</label>
					<input type="checkbox" id="showPass" {...register('showPassword')}/>
				</div>
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
}