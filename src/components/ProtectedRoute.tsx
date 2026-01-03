import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export const ProtectedRoute = () => {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	if(isAuth) {
		return <Outlet/>
	} else {
		return <Navigate to={'/login'}/>
	}
}