import type { IUser } from "../types/User";
import { api } from "./instance"

export const fetchUsers = async ():Promise<IUser[]> => {
	const response = await api.get<IUser[]>('/users');
	return response.data;
}
