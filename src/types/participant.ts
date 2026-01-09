export type ITicket =  'standard' | 'vip' |'student';
export interface IParticipant {
	id: string,
	email: string,
	fullName: string,
	age: number,
	ticketType: ITicket,
	universityName?: string,
	dietaryRestrictions?: string,
	airportTransfer?:boolean
}

