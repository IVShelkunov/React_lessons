interface IAddress {
	address: string,
	city: string,
	country: string
}
export interface IUser {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	image: string,
	age: number,
	address: IAddress,
	company: {name: string}
}
export type UserParams = {
	userId: string
}