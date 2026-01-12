import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom"
import { deletePost, fetchPostById } from "../api/postApi";
import { useAppSelector } from "../store/hooks";

type PostParams = {
	postId: string
}
export const PostDetailPage = () => {
	const navigate = useNavigate();
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const userId = useAppSelector(state => state.auth.user?.id);
	const {postId} = useParams<PostParams>();
	const {data} = useQuery({
		queryKey: ['post' , postId],
		queryFn: () => fetchPostById(postId!)
	});
	const deleteMutation = useMutation({
		mutationFn: (id: string) => deletePost(id),
		onSuccess: () => {
			navigate('../posts');
		}
	});
	const onDeletePost = async (id: string) => {
		await deleteMutation.mutateAsync(id);
	}
	if(data) {
		return (
			<div className="post-detail">
				<h3>{data.title}</h3>
				<p>{data.content}</p>
				<Link to={'../posts'}>Назад</Link>
				{isAuth && userId === data.authorId && <button onClick={() => onDeletePost(data.id)}>Удалить пост</button>}
			</div>
		);
	}
	
}