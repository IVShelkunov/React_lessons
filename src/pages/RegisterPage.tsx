import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type RegisterFormValues } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import type { IUser } from "../types/user";
import { regUser } from "../api/userApi";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import styles from './FormStyles/Form.module.css';
export const RegisterPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {register,handleSubmit,formState:{errors},setError,watch} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema)
	});
	const showPass = watch('showPassword');
	const registerMutation = useMutation({
		mutationFn: (regData: Omit<IUser , 'id' | 'avatar'>) => regUser(regData),
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
		<div className={styles.container}>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formGroup}>
					<label className={styles.label}>имя:</label>
					<input type="text"{...register('firstName')}/>
					{errors.firstName && <div className="error">{errors.firstName.message}</div>}
				</div>
				<div className={styles.formGroup}>
					<label className={styles.label}>фамилия:</label>
					<input type="text"{...register('lastName')}/>
					{errors.firstName && <div className="error">{errors.firstName.message}</div>}
				</div>
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
					<label className={styles.label}>подтвердите пароль:</label>
					<input type={showPass ? 'text': 'password'}{...register('confirmPassword')}/>
					{errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
				</div>
				<div className={styles.formGroup}>
					<label>показать пароль</label>
					<input type="checkbox"{...register('showPassword')}/>
				</div>
				<div className={styles.formGroup}>
					{errors.root && <div className="error">{errors.root.message}</div>}
					<button type="submit">{registerMutation.isPending? 'Регистрируем': 'Зарегистрироваться'}</button>
				</div>
			</form>
		</div>
	);
}