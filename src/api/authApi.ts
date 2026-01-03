import type { IUser } from "../types/user";
import { api } from "./instance";
type LoginDataType = Pick<IUser , 'email' | 'password'>
//логин

export const login = async (loginData: LoginDataType):Promise<IUser> => {
	const response = await api.get<IUser[]>('/users' , {
		params: {
			email:loginData.email,
			password: loginData.password
		}
	});
	const users = response.data;
	if(users.length === 0) {
		throw new Error('Неверный логин или пароль');
	}
	return users[0];
}
//регистрация
export const registerUser = async (registerData: Omit<IUser , 'id'>):Promise<IUser> => {
	const responseGet = await api.get<IUser[]>('/users' , {
		params: {
			email: registerData.email
		}
	});
	if(responseGet.data.length !== 0) {
		throw new Error('E-mail занят другим пользователем');
	}
	const response = await api.post('/users' , {...registerData , id: Date.now().toString()});
	return response.data;
	
	
}
