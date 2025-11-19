import { useOutletContext } from "react-router-dom";
import type { User } from "../types/types";

export function SecuritySettingsPage() {
	const user = useOutletContext<User>();
	return (
		<form className="security-form">
			<label htmlFor="pass">Смена пароля пользователя : {user.name}</label>
			<input id="pass"  type="password" placeholder="введите пароль"/>
			<input type="password" placeholder="повторите пароль"/>
		</form>
	);
}