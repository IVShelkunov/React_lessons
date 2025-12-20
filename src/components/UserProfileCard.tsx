import type { UserProfileCardProps } from "../types/types";

export function UserProfileCard({user , onEdit}: UserProfileCardProps) {
	return (
		<div className="profile-card">
			<h1>Привет, {user.name}!</h1>
			<p>email: {user.email}</p>
			<p>О себе: {user.bio}</p>
			<button onClick={onEdit}>Редактировать</button>
		</div>
	);
}