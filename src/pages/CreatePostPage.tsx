//CreatePostPage.tsx
import { useState } from "react";
import type { CreatePostPageProps , IForm } from "../types/types";
import { useNavigate } from "react-router-dom";
export function CreatePostPage({onAddPost}: CreatePostPageProps) {
	const navigate = useNavigate();
	const initialFormValues = {title:'' , content: ''};
	const [formValues , setFormValues] = useState<IForm>(initialFormValues);
	const handleChangeFormValues = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormValues(prev => ({...prev, [e.target.name]:e.target.value}));
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onAddPost({...formValues , id: Date.now()});
		setFormValues(initialFormValues);
		navigate('/');
	}
	return (
		<div className="create-post">
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Введите название поста</label>
				<input type="text" name="title" id="title" value={formValues.title} onChange={handleChangeFormValues}/>
				<label htmlFor="content">Напишите пост:</label>
				<textarea id="content" name="content" value={formValues.content} onChange={handleChangeFormValues}/>
				<button type="submit" disabled={formValues.title.trim()===''|| formValues.content.trim()===''}>Опубликовать</button>
			</form>
		</div>
	);
}