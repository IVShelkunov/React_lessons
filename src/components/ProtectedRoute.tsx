import { useAppSelector } from "../store/hooks";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	if(isAuth) {
		return <Outlet/>
	} else {
		return <Navigate to={'/login'}/>
	}
}