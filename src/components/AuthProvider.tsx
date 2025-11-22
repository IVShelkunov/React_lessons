import { useState } from "react";
import type {User} from "../types/types";
import { AuthContext } from "../contexts/auth";

export function AuthProvider ({children}: {children: React.ReactNode}) {
	const [user , setUser] = useState<User | null>(null);
	const login = (name:string):void => setUser({name});
	const logout = ():void => setUser(null);
	return (
		<AuthContext.Provider value={{user , login , logout}}>
			{children}
		</AuthContext.Provider>
	);
}