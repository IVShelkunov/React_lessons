import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IUser } from "../types/user";
import { registerUser } from "../api/authApi";
import { useAppDispatch } from "../store/hooks";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
	interface IRegForm {
		name: string,
		email: string,
		password: string,
		confirmPassword: string,
		showPassword: boolean
	}
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const regMutate = useMutation({
		mutationFn: (regData:Omit<IUser ,'id'>) => registerUser(regData),
		onSuccess: (user) => {
			dispatch(setCredentials(user));
			navigate('/profile');
		}
	});
	const {register , handleSubmit , formState: {errors} , watch,setError} = useForm<IRegForm>();
	const onSubmit: SubmitHandler<IRegForm> = async (regData: IRegForm) => {
		try {
			const {name,email,password} = regData;
			await regMutate.mutate({name,email,password});
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
					<input id="name" type="text" {...register('name' , {
						required: 'введите имя'
					})}/>
					{errors.name && <div className="error">{errors.name.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="email">введите email:</label>
					<input id="email" type="email" {...register('email' , {
						required: 'введите email',
						validate: (value) => value.includes('@') || 'поле должно содержать "@"'
					})}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="password">придумайте пароль:</label>
					<input id="password" type={showPassword? 'text': 'password'} {...register('password' , {
						required: 'введите пароль',
						minLength: {value: 6 , message: 'пароль должен быть не менее 6 символов'}
					})}/>
					{errors.password && <div className="error">{errors.password.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">введите пароль еще раз:</label>
					<input id="confirmPassword" type={showPassword? 'text': 'password'} {...register('confirmPassword' , {
						required: 'введите пароль',
						validate: (value) => value === watch('password') || 'пароли не совпадают'
					})}/>
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