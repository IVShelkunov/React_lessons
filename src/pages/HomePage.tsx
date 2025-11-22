import { useAuth } from "../contexts/auth"


export function HomePage() {
	const { user } = useAuth();
	return (
		<div>
			<h1>Главная страница</h1>
			<p>{user ? `Вы вошли как: ${user.name}`: 'Вы гость'}.</p>
		</div>
	);
}