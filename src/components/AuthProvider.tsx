import { useState } from "react";
import { AuthContext } from "../contexts/auth";
import type { User } from "../types/types";

export function AuthProvider({children}: {children: React.ReactNode}) {
	const [user , setUser] = useState<User>(null);
	const login = (userData: User) => setUser(userData);
	const logout = () => setUser(null);
	return (
		<AuthContext.Provider value={{user , login , logout}}>
			{children}
		</AuthContext.Provider>
	);
}