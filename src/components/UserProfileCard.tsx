import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserProfileCardProps } from "../types/types";
import { deleteUser } from "../api/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function UserProfileCard({user , onEdit}: UserProfileCardProps) {
	const [isDelete , setIsDelete] = useState(false);
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const deleteMutation = useMutation({
		mutationFn: () => deleteUser(user.id),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['users']});
			navigate('/login');
		}
	});
	const handleDeleteAccount = () => {
		deleteMutation.mutate();
	}
	window.addEventListener('keydown' , (e) => {
		if(e.key === 'Escape') {
			setIsDelete(false);
		}
	});
	return (
		<div className="profile-card">
			{isDelete && (
				<div className="delete-modal" onClick={() => setIsDelete(false)}>
					<div className="delete-card" onClick={(e) => e.stopPropagation()}>
						<p>Вы действительно хотите удалить аккаунт?</p>
						<button onClick={handleDeleteAccount}>Да</button><button onClick={() => setIsDelete(false)}>Нет</button>
					</div>
				</div>
			)}
			<h1>Привет, {user.name}!</h1>
			<p>email: {user.email}</p>
			<p>О себе: {user.bio}</p>
			<button onClick={onEdit}>Редактировать</button>
			<button onClick={() => setIsDelete(true)}>Удалить аккаунт</button>
		</div>
	);
}