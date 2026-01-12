import z from "zod";

export const createPostShema = z.object({
	title: z.string().min(1, 'введите название').min(3,'минимум 3 символа'),
	content: z.string().min(1,'вы забыли написать пост').min(10, 'минимум 10 символов')
});
export type CreatePostFormValues = z.infer<typeof createPostShema>;