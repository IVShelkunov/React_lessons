import { useAppSelector } from "../store/hooks";

export const HomePage = () => {
	const user = useAppSelector(state => state.auth.user);
	return (
		<div className="home">
			<h2>Главная страница</h2>
			<p>Вы вошли как {user ? `${user.firstName} ${user.lastName}` : 'Гость'}</p>
		</div>
	);
}