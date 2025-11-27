import { Link } from "react-router-dom";
import { posts } from "../data/data";

export function BlogPage() {
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