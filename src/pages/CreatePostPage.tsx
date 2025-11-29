import { useState } from "react";
import { usePosts } from "../contexts/posts";
import type { CreatePostType } from "../types/types";
import { useNavigate } from "react-router-dom";

export function CreatePostPage() {
	const navigate = useNavigate();
	const {onAdd} = usePosts();
	const [inputData , setInputData] = useState<CreatePostType>({title: '' , content: ''});
	const isValidForm = inputData.title.trim()!== '' && inputData.content.trim()!== '';
	const handleChangeInputData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInputData(prev => ({...prev , [e.target.id]: e.target.value}));
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onAdd(inputData);
		navigate('/profile');
	}
	return (
			<form className="create-post" onSubmit={handleSubmit}>
				<label htmlFor="title">Название поста:</label>
				<input type="text" id="title" value={inputData.title} onChange={handleChangeInputData}/>
				<label htmlFor="content">Напишите пост</label>
				<textarea id="content" value={inputData.content} onChange={handleChangeInputData}/>
				<button type="submit" >Создать</button>
			</form>
	);
}