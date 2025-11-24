import { useAuth } from "../contexts/auth";

export function ProfilePage() {
	const {user} = useAuth();
	return <h1>Страница профиля для {user.name}</h1>;
}