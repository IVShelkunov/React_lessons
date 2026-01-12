import type { IUser } from "../types/user";
import { api } from "./instance";

//регистрация
export const regUser = async (regData: Omit<IUser , 'id'>):Promise<IUser> =>  {
	const findUser = await api.get<IUser[]>('/users' , {
		params: {
			email: regData.email
		}
	});
	if(findUser.data.length !== 0) {
		
		throw new Error('Email занят другим пользователем')
	}
	const response = await api.post<IUser>('/users' , {...regData , id: Date.now().toString()});
	return response.data;
}
//вход
export const loginUser = async (logData: Pick<IUser , 'email' | 'password'>):Promise<IUser> => {
	const {email,password} = logData;
	const findUser = await api.get<IUser[]>('/users' , {
		params: {
			email,
			password
		}
	});
	if(findUser.data.length === 0) {
		throw new Error('Неверный логин или пароль');
	}
	return findUser.data[0];
}