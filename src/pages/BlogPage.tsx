import { Link } from "react-router-dom";
import { usePosts } from "../contexts/posts";


export function BlogPage() {
	const {posts} = usePosts();
	return (
		<div className="blog">
			<h1>Посты</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}><Link to={`/blog/${post.id}`}>{post.id}# {post.title}</Link></li>
				))}
			</ul>
		</div>
	);
}