import type { IPost } from "../types/post";
import { api } from "./instance";
//создание поста
export const createPost = async (postData: Omit<IPost,'id'>):Promise<IPost> => {
	const response = await api.post<IPost>('/posts',{...postData, id: Date.now().toString()});
	return response.data;
}
export const deletePost = async (postId: string) => {
	const response = await api.delete(`/posts/${postId}`);
	return response;
}
//получение постов
export const fetchPosts = async (authorId?:string):Promise<IPost[]> => {
	const response = await api.get('/posts' , {
		params: {
			authorId
		}
	});
	return response.data;
}
//получение поста по ID
export const fetchPostById = async (id: string):Promise<IPost> => {
	const response = await api.get<IPost>(`/posts/${id}`);
	return response.data;
}
