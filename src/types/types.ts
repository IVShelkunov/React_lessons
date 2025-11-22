export interface User {
	name: string
}
export type AuthContextType = {
	user: User | null,
	login: (name: string) => void,
	logout: () => void
}

