import { useAuth } from "../contexts/auth";
import { usePosts } from "../contexts/posts";

export function MyPostsPage() {
	const {posts,onDelete} = usePosts();
	const {user} = useAuth();
	return (
		<div className="my-post">
			<h1>Мои посты</h1>
			<ul>
				{posts.filter(post => post.authorId === user.id).map(post => (
					<li key={post.id}>
						<h4>{post.title}</h4>
						<p>{post.content}</p>
						<button onClick={() => onDelete(post.id)}>Удалить пост</button>
					</li>
				))}
			</ul>
		</div>
	);
}