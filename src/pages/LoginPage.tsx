import { useForm, type SubmitHandler } from "react-hook-form";
import { login } from "../api/authApi";
import { useAppDispatch } from "../store/hooks";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormValues } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {register , handleSubmit , setError , formState: {errors}} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema)
	});
	const onSubmit:SubmitHandler<LoginFormValues> = async (loginData: LoginFormValues) => {
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
					<input id="email" type="email" {...register('email')}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="password">password:</label>
					<input id="password" type="пароль" {...register('password')}/>
					{errors.password && <div className="error"> {errors.password.message}</div>}
				</div>
				{errors.root && <div className="error">{errors.root.message}</div>}
				<button type="submit">Войти</button>
			</form>
		</div>
	);
}