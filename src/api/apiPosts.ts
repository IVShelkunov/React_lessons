import type { IPost } from "../types/types";
import { api } from "./instance";

export const fetchPosts = async (page: number, limit: number): Promise<IPost[]> => {
	const response = await api.get(`/posts?_page=${page}&_limit=${limit}`);
	return response.data;
}