import type { IParticipant } from "../types/participant";
import { api } from "./instance";

export const registerParticipant = async (data: Omit<IParticipant , 'id'>):Promise<IParticipant> => {
	const existUser = await api.get<IParticipant[]>('/registrations', {
		params: {
			email: data.email
		}
	});
	if(existUser.data.length !== 0) {
		throw new Error('участник с таким email уже зарегистрирован');
	}
	const response = await api.post<IParticipant>('/registrations', {...data , id: Date.now().toString()});
	return response.data;
}

export const fetchParticipants = async ():Promise<IParticipant[]> => {
	const response = await api.get<IParticipant[]>('/registrations');
	return response.data;
}