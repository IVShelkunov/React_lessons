import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function ProtectedRoute() {
	const {currentUser} = useAuth();
	if(!currentUser) {
		return <Navigate to={'/login'}/> ;
	}
	return <Outlet/>;
}