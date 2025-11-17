import { Navigate,  useParams } from "react-router-dom";
import type { PostParams } from "../types/types";
import { posts } from "../data/data";


export function PostDetailPage() {
	const {postId} = useParams<PostParams>();
	const currentPost = posts.find(post => post.id === Number(postId));
	if(postId) {
		return (
		<div className="post-details">
			<h1>{currentPost?.title}</h1>
			<p>{currentPost?.content}</p>
		</div>
	);
	} else {
		return <Navigate to="/404" replace />;
		}
}