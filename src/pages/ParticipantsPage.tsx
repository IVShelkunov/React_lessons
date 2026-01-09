import { useQuery } from "@tanstack/react-query";
import { fetchParticipants } from "../api/participantApi";
import { Link } from "react-router-dom";

export const ParticipantsPage = () => {
	const {data,isLoading , isError,error} = useQuery({
		queryKey: ['registrations'],
		queryFn: fetchParticipants
	});
	return(
		<div className="participants">
			{isLoading && <div>Загрузка...</div>}
			{isError && <div className="error">{error.message}</div>}
			{data && (
				<ul>
					{data.map(item => (
						<li key={item.id}>{item.fullName}</li>
					))}
				</ul>
			)}
			<Link to={'/'}>Присоединиться</Link>
		</div>
	);
}