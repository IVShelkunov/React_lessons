import type { ITicket } from "../types/ticket";
import { api } from "./instance";
//получение заявок пользователя
export const fetchTicketsByUserId = async (userId:string):Promise<ITicket[]> => {
	const response = await api.get<ITicket[]>('/tickets' , {
		params: {
			userId
		}
	});
	return response.data;
}
//создание новой заявки
export const createTicket = async (ticketData: Omit<ITicket,'id'>): Promise<ITicket> => {
	const response = await api.post('/tickets' , {...ticketData , id: Date.now().toString()})
	return response.data;
}
//изменение статуса заявки
export const changeStatusTicket = async ({id , status}: Pick<ITicket , 'id' | 'status'>):Promise<ITicket> => {
	const response = await api.patch<ITicket>(`/tickets/${id}`,{status});
	return response.data;
}