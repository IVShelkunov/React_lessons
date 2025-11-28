import { useAuth } from "../contexts/auth";
import { posts } from "../data/data";

export function MyPostsPage() {
	const {user} = useAuth();
	return (
		<div className="my-post">
			<h1>Мои посты</h1>
			<ul>
				{posts.filter(post => post.authorId === user.id).map(post => (
					<li key={post.id}>
						<h4>{post.title}</h4>
						<p>{post.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}