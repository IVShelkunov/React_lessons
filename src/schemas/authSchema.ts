import {z} from 'zod'
import type { ITicket } from '../types/participant';
export const registerSchema = z.object({
	fullName: z.string().min(2, 'минимум 2 символа'),
	email: z.string().email('некорректный email'),
	age: z.number().min(18 , 'вам нет 18!'),
	ticketType: z.enum<ITicket[]>(['standard' , 'vip' , 'student']),
	universityName: z.string().optional(),
	dietaryRestrictions: z.string().optional(),
	airportTransfer: z.boolean().optional(),
	isAgree: z.boolean().refine(val => val === true, 'Вы обязаны согласиться')
})
.superRefine((values , ctx) => {
	if(values.ticketType === 'student') {
		if(!values.universityName || values.universityName.length < 3) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'укажите университет минимум 3 символа',
				path: ['universityName']
			});
		}
	}
});

export type RegisterFormValues = z.infer<typeof registerSchema>
