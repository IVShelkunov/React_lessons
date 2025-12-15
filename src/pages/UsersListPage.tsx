import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import { Link } from "react-router-dom";

export function UsersListPage() {
	const {data ,isLoading, isError,error} = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers
	});
	return (
		<div className="user-list">
			<h1>Список сотрудников</h1>
			{isLoading && <div className="spinner"></div>}
			{isError && <div className="error">{error.message}</div>}
			{data && (
				<ul>
					{data.map(user => (
						<li key={user.id}>
							<Link to={`/user/${user.id}`}>{user.firstName} {user.lastName}. 📧E-mail: {user.email}.</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}