import { useForm, type SubmitHandler } from "react-hook-form";

interface ILoginForm {
	email: string,
	password: string
}
export const LoginForm = () => {
	const {register , handleSubmit, formState: {errors}} = useForm<ILoginForm>();
	const onSubmit:SubmitHandler<ILoginForm> = (data:ILoginForm) => {
		alert(`Успех! email: ${data.email} пароль: ${data.password}`);
		
	}
	return(
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="form-group">
				<label>e-mail:</label>
				<input type="email" {...register('email' , {
					required: 'введите e-mail',
					validate: (value) => value.includes('@') || 'поле должно содержать символ @'
				})}/>
				{errors.email && <div className="error">⚠️ {errors.email.message}</div>}
			</div>
			<div className="form-group">
				<label>password:</label>
				<input type="password" {...register('password', {
					required: 'введите пароль',
					minLength: {value: 8 , message: 'пароль должен содержать не менее 8 символов'}
				})}/>
				{errors.password && <div className="error">⚠️ {errors.password.message}</div>}
			</div>
			<button type="submit">Отправить</button>
		</form>
	);
}