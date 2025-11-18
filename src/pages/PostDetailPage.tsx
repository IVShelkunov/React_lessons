import { Link, Navigate,  useParams } from "react-router-dom";
import type { PostParams } from "../types/types";
import { posts } from "../data/data";


export function PostDetailPage() {
	const {postId} = useParams<PostParams>();
	const currentPost = posts.find(post => post.id === Number(postId));
	if(currentPost) {
		return (
		<div className="post-details">
			<h1>{currentPost.title}</h1>
			<p>{currentPost.content}</p>
			<Link to={'/'}>На главную</Link>
		</div>
	);
	} 
		return <Navigate to="/404" replace />;
		
}