import { useAppSelector } from "../store/hooks";

export const ProfilePage = () => {
	const user = useAppSelector(state => state.auth.user);
	if(user) {
		return(
			<div className="profile">
				<h1>Привет, {user.name}</h1>
				<p>ваш e-mail: {user.email}</p>
			</div>
		);
	}
	
}