export interface IProject {
  id: number;
  name: string;
  description: string;
  tasks: string[];
}
export type ProjectParams = {
	projectId: string
}
export type UserLoginData = {
	username: string,
	password: string
}
export interface User {
	authentication : UserLoginData,
	firstName: string,
	lastName: string
}
export type AuthContextType = {
	users: User[],
	currentUser: User | null,
	login: (inputData:UserLoginData) => void,
	logout: () => void
}