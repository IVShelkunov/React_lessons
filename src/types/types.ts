export type UserRole = 'user' | 'admin';
export interface User {
	name: string,
	role: UserRole
}
export type AuthContextType = {
	user: User | null,
	login: (userData: User) => void,
	logout: () => void
}
export type ProtectedRouteType = {
	allowedRoles?: UserRole[]
}
