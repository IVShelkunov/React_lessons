import { useAuth } from "../contexts/auth";

export function HomePage() {
	const {user} = useAuth();
	return (
		<div className="home">
			<h1>Главная страница</h1>
			<p>Вы вошли как {user? user.name : 'гость'}</p>
		</div>
	);
}