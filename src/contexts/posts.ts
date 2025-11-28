import { createContext, useContext } from "react";
import type { PostsContextType } from "../types/types";

export const PostsContext = createContext<PostsContextType | null>(null);
export const usePosts = () => {
	const context = useContext(PostsContext);
	if(!context) {
		throw new Error('usePosts() должен быть вызван внутри PostsProvider');
	}
	return context;
}