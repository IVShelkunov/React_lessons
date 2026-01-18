import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import { fetchPosts } from "../api/postApi";
import { Link } from "react-router-dom";
import { PostsList } from "../components/PostsList/PostsList";

export const UserPostsPage = () => {
	const userId = useAppSelector(state => state.auth.user!.id);
	const {data , isLoading , isError , error} = useQuery({
		queryKey: ['posts' , userId],
		queryFn: () => fetchPosts(userId)
	});
	return (
		<div className="user-posts">
			{isError && <div className="error">{error.message}</div>}
			{isLoading && <div>Загрузка постов...</div>}
			{data && (
				<div>
					{data.length === 0 ? <div><p>У вас пока нет постов</p><Link to={'../create'}>Создать</Link></div>: (
						<PostsList posts={data}/>
					)}
				</div>
			)}
		</div>
	);
}