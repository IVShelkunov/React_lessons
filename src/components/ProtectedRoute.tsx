import { Navigate, Outlet, replace } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export function ProtectedRoute() {
	const {user} = useAuth();
	if(!user) {
		//Если пользователя нет, перенаправляем на страницу логина
    // `replace` нужен, чтобы пользователь не мог нажать "Назад" и вернуться
    // на защищенную страницу, будучи неавторизованным.
		return <Navigate to={'/login'}  replace/>
	}
	//Если пользователь есть, рендерим дочерний маршрут
	return <Outlet/>;
}