import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postApi";
import { Link } from "react-router-dom";
import { PostsList } from "../components/PostsList/PostsList";

export const AllPostsPage = () => {
	const {data, isLoading,isError,error} = useQuery({
		queryKey: ['posts'],
		queryFn: () => fetchPosts()
	});
	return (
		<div className="all-posts">
			{isError && <div className="error">{error.message}</div>}
			{isLoading && <div>Загрузка постов...</div>}
			{data && (
				<>
					{data.length === 0 ? (
						<div>
							<p>Здесь еще нет постов</p>
							<Link to={'/profile/create'}>Станьте первым!</Link>
						</div>
					) : (
							<PostsList posts={data}/>
						)}
				</>
			)}
			
		</div>
	);
}