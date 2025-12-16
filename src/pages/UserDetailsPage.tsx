import { Link, useParams } from "react-router-dom";
import type { UserParams } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../api/users";

export function UserDetailsPage() {
	const {userId} = useParams<UserParams>();
	const {data,isLoading,isError,error} = useQuery({
		queryKey: ['user' , userId],
		queryFn:() => fetchUserById(userId!),
		enabled:!!userId
	});
	return (
		<div className="details-page">
			{isLoading && <div className="spinner"></div>}
			{isError && <div className="error">{error.message}</div>}
			{data && (
				<div className="details">
					<img src={data.image}/>
					<h1>{data.firstName} {data.lastName}</h1>
					<p>📍{data.address.country}. {data.address.city}. {data.address.address}.</p>
				</div>
			)}
			<Link to={'/'}>Назад к списку</Link>
		</div>
	);
}