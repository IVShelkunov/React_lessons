import { useAppSelector } from "../store/hooks";

export const ProfileDataPage = () => {
	const user = useAppSelector(state => state.auth.user);
	if(user) {
		return (

		<div className="profile-data">
			<h2>Пользователь {user.firstName} {user.lastName}</h2>
			<p>email: {user.email}</p>
		</div>
		);
	}
	
}