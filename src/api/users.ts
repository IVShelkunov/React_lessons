import type { IUser } from "../types/types";

export const fetchUsers = async ():Promise<IUser[]> => {
	const response = await fetch('https://dummyjson.com/users');
	if(!response.ok) {
		throw new Error('Ошибка сети');
	}
	const data: {users: IUser[]} = await response.json();
	return data.users;
}
export const fetchUserById = async (id: string): Promise<IUser> => {
	const response = await fetch(`https://dummyjson.com/users/${id}`);
	if(!response.ok) {
		throw new Error('Ошибка сети');
	}
	const data:IUser = await response.json();
	return data;
}