import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import { getUser } from "../api/user";

export function HomePage() {
	const userId = useAppSelector(state => state.auth.userId);
	const {data} = useQuery({
		queryKey: ['user' , userId],
		queryFn: () => getUser(userId!),
		enabled: !!userId
	});
	return (
		<div className="home">
			<h1>Главная страница</h1>
			<p>Вы вошли как {data? data.name : 'Гость'}</p>
		</div>
	);
}