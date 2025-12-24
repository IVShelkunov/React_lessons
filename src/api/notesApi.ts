import type { CreateNoteData, INote } from "../types/types";
import { api } from "./instance"
//получение заметок
export const fetchNotes = async (category?: string):Promise<INote[]> => {
	if(category) {
		const response = await api.get<INote[]>('/notes' , {params: {category}});
		return response.data;
	}
	const response = await api.get<INote[]>('/notes');
	return response.data;
}
//создание заметки 
export const createNote = async (note:CreateNoteData):Promise<INote> => {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth();
	const day = now.getDay();
	const response = await api.post<INote>('/notes' , {...note , id: Date.now().toString() , date:`${year}-${month}-${day}`});
	return response.data;
}
//удаление заметки 
export const deleteNote = (id: string) =>  {
	const response = api.delete(`/notes/${id}`);
	return response;
}