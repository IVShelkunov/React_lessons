import { Link, useParams } from "react-router-dom";
import type { PostParams } from "../types/types";
import {users } from "../data/data";
import { usePosts } from "../contexts/posts";

export function PostDetailPage() {
	const {posts} = usePosts();
	const {postId} = useParams<PostParams>();
	const selectedPost = posts.find(post => post.id === Number(postId));
	if(selectedPost) {
		const postAuthor = users.find(user => user.id === selectedPost.authorId);
		return (
			<div className="post-detail">
				<h1>{selectedPost.title}</h1>
				<p>{selectedPost.content}</p>
				<p>Автор: {postAuthor? postAuthor.name:'автор неизвестен'}</p>
				<Link to={'/blog'}>все посты</Link>
			</div>
		);
	}
	
}