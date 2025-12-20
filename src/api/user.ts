import type { IUser, RegisterData } from "../types/types";
const BASE_URL = 'http://localhost:3001/users'
//
export const getUser = async (userId: string): Promise<IUser> => {
	const response =  await fetch(`${BASE_URL}/${userId}`);
	if(!response.ok) throw new Error('Ошибка сети');
	return response.json();
}
//РЕГИСТРАЦИЯ
export const registerUser = async (userData:RegisterData): Promise<IUser> => {
	const response = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({...userData, id: Date.now().toString()})
	});
	if (!response.ok) throw new Error('Ошибка создания');
	return response.json();
	
}
// обновление 
export const updateUser = async (id: string , changes: Partial<IUser>) => {
	const response = await fetch(`${BASE_URL}/${id}` , {
		method: 'PATCH' , 
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(changes)
	});
	if (!response.ok) throw new Error('Ошибка обновления');
	return response.json();
}
//удаление 
export const deleteUser = async (id:string) => {
	const response = await fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE'
	});
	if (!response.ok) throw new Error('Ошибка удаления');
  	return response.json();
}
//логин
export const loginUser = async (email:string):Promise<IUser[]> => {
	const response = await fetch(`${BASE_URL}?email=${email}`);
	if(!response.ok) throw new Error('Ошибка сети');
	return response.json();
}