export type UserRole = 'user' | 'admin';
export interface User {
	name: string,
	role: UserRole
}
export type AuthContextType = {
	user: User,
	login: (userData: User) => void,
	logout: () => void
}
