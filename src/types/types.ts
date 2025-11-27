export interface User {
	id: number,
	name: string
}
export interface Post { 
	id: number,
	title: string,
	content: string,
	authorId: number
}
export type AuthContext = {
	user: User,
	login: (name:string) => void,
	logout: () => void
}
export type PostParams = {
	postId: string
}