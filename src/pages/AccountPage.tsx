import { useAuth } from "../contexts/auth";

export function AccountPage() {
	const {user} = useAuth();
	if(user) {
		return (
			<div className="account">
				<h1>Личный кабинет, {user.name}!</h1>
			</div>
		);
	}
}