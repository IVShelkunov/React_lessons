import { useState, type ReactNode } from "react";
import { users } from "../data/data";
import { AuthContext } from "../contexts/auth";

export function AuthProvider({children}: {children: ReactNode}) {
	const [user,setUser] = useState<User | null>(null);
	const login = (name:string) => {
		const logUser = users.find(user => user.name === name);
		if(logUser) {
			setUser(logUser);
		}
	}
	const logout = () => setUser(null);
	return (
		<AuthContext.Provider value={{user , login , logout}}>
			{children}
		</AuthContext.Provider>
	);
}