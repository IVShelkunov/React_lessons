import { useAuth } from "../contexts/auth";

export function ProfilePage() {
	const {currentUser} = useAuth();
	if(currentUser) {
		return (
			<div className="profile">
				<h1>Приветствуем , {currentUser.firstName} {currentUser.lastName}</h1>
				<p>Это ваш приватный профиль.</p>
			</div>
		);
	}
}