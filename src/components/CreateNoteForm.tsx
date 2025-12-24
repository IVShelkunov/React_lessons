import { useState } from "react";
import type { CreateNoteData } from "../types/types";
import { categories, nameCategory } from "../data/categoryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../api/notesApi";


export function CreateNoteForm() {
	const queryClient = useQueryClient();
	const createMutation = useMutation({
		mutationFn: (note:CreateNoteData) => createNote(note),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['notes']});
		}
	});
	const formCategories = categories.filter(category => category !== 'all');
	const initialData = {title:'' , category: 'work'}
	const [formData , setFormData] = useState<CreateNoteData>(initialData);
	const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData(prev => ({...prev , [e.target.id]: e.target.value}));
	}
	const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault();
		createMutation.mutate(formData);
		setFormData(initialData);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input id="title" type="text" value={formData.title} onChange={handleChangeFormData}/>
			<select id="category" value={formData.category} onChange={handleChangeFormData}>
				{formCategories.map(category => (
					<option key={category} value={category}>{nameCategory(category)}</option>
				))}
			</select>
			<button type="submit">{createMutation.isPending? 'Создаем...' : 'Создать'}</button>
		</form>
	);
}