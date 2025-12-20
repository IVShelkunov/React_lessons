import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EditProfileFormProps, IUser } from "../types/types";
import { useState } from "react";
import { updateUser } from "../api/user";

export function EditProfileForm({user,onClose}: EditProfileFormProps) {
	const queryClient = useQueryClient();
	const [editFormData , setEditFormData] = useState<IUser>(user);
	const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditFormData(prev => ({...prev , [e.target.id]:e.target.value}));
	}
	const updateMutation = useMutation({
		mutationFn: (changes:Partial<IUser>) => updateUser(user.id , changes),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['user', user.id]});
			onClose();
		}
	});
	const handleSubmit = (e:React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault();
		const changes:Partial<IUser> = {};
		if(editFormData.name !== user.name) {
			changes.name = editFormData.name;
		}
		if(editFormData.email !== user.email) {
			changes.email = editFormData.email;
		}
		if(editFormData.bio !== user.bio) {
			changes.bio = editFormData.bio;
		}
		if(Object.keys(changes).length === 0) {
			onClose();
			return;
		}
		updateMutation.mutate(changes);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Имя</label>
			<input id="name" value={editFormData.name} onChange={handleChangeFormData}/>
			<label htmlFor="email">E-mail</label>
			<input id="email" value={editFormData.email} onChange={handleChangeFormData}/>
			<label htmlFor="bio">О себе</label>
			<input id="bio" value={editFormData.bio} onChange={handleChangeFormData}/>
			<button type="submit">{updateMutation.isPending ? 'Сохраняем...':'Сохранить'}</button>
		</form>
	);
}