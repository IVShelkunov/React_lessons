import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type LoginFormValues } from "../../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../api/userApi";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import styles from '../FormStyles/Form.module.css'

export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {register , handleSubmit , formState: {errors} , setError,watch} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema)
	});
	const showPass = watch('showPassword');
	const onSubmit: SubmitHandler<LoginFormValues> = async (logData: LoginFormValues) => {
		const {showPassword , ...dataToSend} = logData;
		try {
			const user = await loginUser(dataToSend);
			dispatch(login(user));
			navigate('/');
		} catch(e) {
			if(e instanceof Error) {
				setError('root' , {message: e.message});
			}
		}
	}
	return (
		<div className={styles.container}>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formGroup}>
					<label className={styles.label}>email:</label>
					<input type="email"{...register('email')}/>
					{errors.email && <div className="error">{errors.email.message}</div>}
				</div>
				<div className={styles.formGroup}>
					<label className={styles.label}>пароль:</label>
					<input type={showPass ? 'text': 'password'}{...register('password')}/>
					{errors.password && <div className="error">{errors.password.message}</div>}
				</div>
				<div className={styles.formGroup}>
					<label>показать пароль</label>
					<input type="checkbox"{...register('showPassword')}/>
				</div>
				<div className={styles.formGroup}>
					{errors.root && <div className="error">{errors.root.message}</div>}
					<button type="submit">Войти</button>
				</div>
			</form>
		</div>
	);
}