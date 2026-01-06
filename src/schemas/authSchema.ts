import z from "zod";
//правила 
const emailRule = z.string().email('Некорректный email');
const passwordRule = z.string().min(6 , 'минимум 6 символов');
//регистрация
export const registerSchema = z.object({
	name: z.string().nonempty('вы забыли указать имя'), //в автоподстановке нашел аналог required
	email: emailRule,
	password: passwordRule,
	confirmPassword: passwordRule,
	showPassword: z.boolean().optional()

})
.refine((data) => data.password === data.confirmPassword, {
	message: 'пароли не совпадают',
	path: ['confirmPassword']
});
export type RegisterFormValues = z.infer<typeof registerSchema>;


//логин
export const loginSchema = z.object({
	email: emailRule,
	password: passwordRule
});
export type LoginFormValues = z.infer<typeof loginSchema>;
