import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import type { ProtectedRouteType } from "../types/types";

export function ProtectedRoute({allowedRoles}:ProtectedRouteType) {
	const {user} = useAuth();
	if(!user) {
		return <Navigate to={'/login'} replace/>;
	}
	if(allowedRoles) {
		if(!allowedRoles.includes(user.role)) {
			return <Navigate to={'/access-denied'}/>;
		}  	
	}
	return <Outlet/>;

}