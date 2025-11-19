import { useOutletContext } from "react-router-dom";
import type { User } from "../types/types";

export function ProfileSettingsPage() {
	const user = useOutletContext<User>();
	return <p>E-mail: {user.email}</p>;
}