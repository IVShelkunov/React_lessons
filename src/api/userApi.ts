import type { IUser } from "../types/user";
import { api } from "./instance";

//регистрация
export const regUser = async (regData: Omit<IUser , 'id' | 'avatar'>):Promise<IUser> =>  {
	const findUser = await api.get<IUser[]>('/users' , {
		params: {
			email: regData.email
		}
	});
	if(findUser.data.length !== 0) {
		
		throw new Error('Email занят другим пользователем')
	}
	const response = await api.post<IUser>('/users' , {...regData , id: Date.now().toString() });
	return response.data;
}
//удалить профиль
export const deleteUser = async (id:string) => {
	const response = await api.delete(`/users/${id}`);
	return response;
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


//загрузка аватара
// Функция загружает файл и возвращает строку (URL)
export const uploadFile = async (file: File): Promise<string> => {
	const formData = new FormData();
	formData.append('avatar', file);

	const response = await api.post<{url:string}>('/upload' , formData,{
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
	return response.data.url;
}
//изменение пути к аватару в db.json
export const updateAvatarPath = async ({id,avatar}: Pick<IUser,'id' | 'avatar'>):Promise<IUser> => {
	const response = await api.patch(`/users/${id}` , {avatar});
	return response.data;
}