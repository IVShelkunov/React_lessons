import { useForm, type SubmitHandler } from "react-hook-form";
import { login } from "../api/authApi";
import { useAppDispatch } from "../store/hooks";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
interface ILoginForm {
	email: string,
	password: string
}
export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {register , handleSubmit , setError , formState: {errors}} = useForm<ILoginForm>();
	const onSubmit:SubmitHandler<ILoginForm> = async (loginData: ILoginForm) => {
		try {
			const user = await login(loginData);
			dispatch(setCredentials(user));
			navigate('/');
		} catch (err) {
			if(err instanceof Error) {
				setError('root' , {message: err.message });
			}
			
		}
	}
	return (
		<div className="login">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="email">email:</label>
					<input id="email" type="email" {...register('email' , {
						required: 'введите email',
						validate: (value) => value.includes('@') || 'поле должно содержать "@"'
					})}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="password">password:</label>
					<input id="password" type="пароль" {...register('password' , {
						required: 'введите пароль'
					})}/>
					{errors.password && <div className="error"> {errors.password.message}</div>}
				</div>
				{errors.root && <div className="error">{errors.root.message}</div>}
				<button type="submit">Войти</button>
			</form>
		</div>
	);
}