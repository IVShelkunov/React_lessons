import { useForm, type SubmitHandler } from "react-hook-form";
import { createPostShema, type CreatePostFormValues } from "../schemas/postShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/postApi";
import type { IPost } from "../types/post";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export const PostCreatePage = () => {
	const userId = useAppSelector(state => state.auth.user!.id);
	const navigate = useNavigate();
	const createPostMutation = useMutation({
		mutationFn: (postData: Omit<IPost,'id'>) => createPost(postData),
		onSuccess: () => {
			navigate('../posts');
		}
	});
	const {register,handleSubmit,formState: {errors}} = useForm<CreatePostFormValues>({
		resolver: zodResolver(createPostShema)
	});
	const onSubmit: SubmitHandler<CreatePostFormValues> = async (postData: CreatePostFormValues) => {
		await createPostMutation.mutateAsync({...postData, authorId: userId});
	}
	return (
		<div className="create-post">
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Название:</label>
					<input type="text" {...register('title')}/>
					{errors.title && <div className="error">{errors.title.message}</div>}
				</div>
				<div>
					<label>Напишите что нибудь:</label>
					<textarea {...register('content')}/>
					{errors.content && <div className="error">{errors.content.message}</div>}
				</div>
				<button>Опубликовать пост</button>
			</form>
		</div>
	);
}