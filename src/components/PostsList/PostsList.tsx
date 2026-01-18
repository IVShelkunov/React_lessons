import { Link } from "react-router-dom";
import type { IPost } from "../../types/post"
import styles from './PostsList.module.css'
type PostsListProps = {
	posts: IPost[]
}
export const PostsList = ({posts}:PostsListProps) => {
	return (
		<ul className={styles.postList}>
			{posts.map(post => (
				<li className={styles.post} key={post.id}><Link className={styles.link} to={`${post.id}`}>{post.title}</Link></li>
			))}
		</ul>
	);
}