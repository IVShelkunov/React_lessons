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
export type AuthContextType = {
	user: User,
	login: (name:string) => void,
	logout: () => void
}
export type PostParams = {
	postId: string
}
export type CreatePostType = Pick<Post,'title' | 'content'>;
export type PostsContextType = {
	posts: Post[],
	onAdd: (newPostData:CreatePostType) => void,
	onDelete: (postId:number) => void
}