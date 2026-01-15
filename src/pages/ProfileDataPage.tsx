import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useMutation } from "@tanstack/react-query";
import  { deleteUser } from "../api/userApi";
import { logout } from "../store/authSlice";
import { useState } from "react";

export const ProfileDataPage = () => {
	const dispatch = useAppDispatch();
	// Helper для получения полного пути
	const getImageUrl = (path: string | undefined) => {
  		if (!path) return '/src/images/default.jpg';
  		if (path.startsWith('http')) return path; // Если это внешняя ссылка
  		return `http://localhost:3001${path}`; // Наш локальный сервер
	};
	const user = useAppSelector(state => state.auth.user);
	const deleteMutation = useMutation({
		mutationFn: (id:string) => deleteUser(id),
		onSuccess: () => {
			dispatch(logout());
		}
	});
	const handleDeleteUser = async () => {
		await deleteMutation.mutateAsync(user!.id);
	}
	const [isModal , setIsModal] = useState(false);
	window.addEventListener('keydown' , (e) => {
		if(e.key === 'Escape') {
			setIsModal(false);
		}
	});
	if(user) {
		return (

		<div className="profile-data">
			<div className="avatar-container">
				<Link to={'changeAvatar'}>
					<img src={getImageUrl(user.avatar)} />
					<div className="change-avatar">📸сменить аватар</div>
				</Link>
			</div>
			<h2>Пользователь {user.firstName} {user.lastName}</h2>
			<p>email: {user.email}</p>
			<button onClick={() => setIsModal(true)}>Удалить аккаунт</button>
			{isModal && (
				<div className="modal-owerlay" onClick={() => setIsModal(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<p>Вы действительно хотите удалить аккаунт?</p>
						<button onClick={handleDeleteUser}>Да</button><button onClick={() => setIsModal(false)}>Нет</button>
					</div>
				</div>
			)}
		</div>
		);
	}
	
}