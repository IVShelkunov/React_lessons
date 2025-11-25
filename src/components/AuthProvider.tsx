import { useState } from "react";
import type { User,UserLoginData } from "../types/types";
import { FAKE_USERS_API } from "../data/FakeUsersApi";
import { AuthContext } from "../contexts/auth";

export function AuthProvider({children}:{children: React.ReactNode}) {
	const [currentUser , setCurrentUser] = useState<User | null>(null);
	const login = (inputData: UserLoginData) => {
		const selectedUser = FAKE_USERS_API.find(user => user.authentication.username === inputData.username && user.authentication.password === inputData.password);
		if(selectedUser) {
			setCurrentUser(selectedUser);
		}
	}
	const logout = () => setCurrentUser(null);
	return (
		<AuthContext.Provider value={{users:FAKE_USERS_API ,currentUser, login, logout}}>
			{children}
		</AuthContext.Provider>
		);
}