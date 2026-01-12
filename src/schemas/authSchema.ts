import {z} from 'zod'
//правила
const passwordRulles = z.string().min(1,'вы забыли ввести пароль').min(6,'минимум 6 символов');
const nameRulles = z.string().min(1, 'вы ничего не ввели').min(3,'минимум 3 символа');
const emailRulles = z.string().min(1,'введите email').email("Некорректный email");
const showPassRulles = z.boolean().optional()
//вход
export const loginSchema = z.object({
	email: emailRulles,
	password: passwordRulles,
	showPassword: showPassRulles
});
export type LoginFormValues = z.infer<typeof loginSchema>
//регистрация
export const registerSchema = z.object({
	firstName: nameRulles,
	lastName: nameRulles,
	email: emailRulles,
	password: passwordRulles,
	confirmPassword: passwordRulles,
	showPassword: showPassRulles
})
.refine(data => data.password === data.confirmPassword , {
	message: 'Пароли не совпадают',
	path: ['confirmPassword']
});
export type RegisterFormValues = z.infer<typeof registerSchema>;

