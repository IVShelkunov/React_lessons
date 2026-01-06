import z from "zod";
import type { PriorityType } from "../types/ticket";
const textareaRule = z.string().min(10 , 'не менее 10 символов')
export const createTicketSchema = z.object({
	title: z.string().min(1,'вы не указали название'),
	description: textareaRule,
	priority: z.enum<PriorityType[]>(['low' ,'medium','high']),
	isUrgent: z.boolean(),
	urgentReason: textareaRule
})
.superRefine((value , ctx) => {
	if(value.isUrgent) {
		if(!value.urgentReason || value.urgentReason.length === 0) {
			ctx.addIssue({
				code:z.ZodIssueCode.custom,
				message: 'опишите причину срочности',
				path: ['urgentReason']
			});
		}
	}
});
export type CreateTicketFormValues = z.infer<typeof createTicketSchema>