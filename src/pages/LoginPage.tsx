import { useMutation} from "@tanstack/react-query";
import { loginUser } from "../api/user";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import type { IUser } from "../types/types";

export function LoginPage () {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const loginMutation = useMutation({
		mutationFn: async (email:string) => {
			const users = await loginUser(email);
			if (users.length === 0) {
        		throw new Error('Пользователь не найден');
      		} 
      		return users[0];
		},
		onSuccess: (user: IUser) => {
			dispatch(login(user.id));
			navigate('/profile');
		},
		onError: (error) => {
			alert(error.message);

		}
	});
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get('email') as string;
		loginMutation.mutate(email);
	}

	return (
		<div className="login">
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input id="email" name="email"  required />
				<button type="submit">{loginMutation.isPending ? 'Входим...':'Войти'}</button>
			</form>
		</div>
	);
}