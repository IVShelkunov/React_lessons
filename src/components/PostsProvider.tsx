import { useState, type ReactNode } from "react";
import type { CreatePostType, Post } from "../types/types";
import { initialPosts } from "../data/data";
import { useAuth } from "../contexts/auth";
import { PostsContext } from "../contexts/posts";

export function PostsProvider({children}: {children: ReactNode}) {
	const {user} = useAuth();
	const [posts , setPosts] = useState<Post[]>(initialPosts);
	const onAdd = (newPostData: CreatePostType) => {
		const newPost:Post = {
			id: posts.length + 1,
			title: newPostData.title,
			content: newPostData.content,
			authorId: user.id
		}
		setPosts(prev => [...prev , newPost]);
	}
	const onDelete = (postId:number) => setPosts(posts.filter(post => post.id !== postId));
	return (
		<PostsContext.Provider value={{posts , onAdd , onDelete}}>
			{children}
		</PostsContext.Provider>
	);
}