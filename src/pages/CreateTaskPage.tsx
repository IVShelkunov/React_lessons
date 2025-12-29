import React, { useState } from "react";
import type { CreateTaskData } from "../types/Task";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";
import { createTask } from "../api/tasksApi";
import { useNavigate } from "react-router-dom";

export const CreateTaskPage = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const {data} = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	});
	const [formData , setFormData] = useState<CreateTaskData>({title: '' , assigneeId: ''});
	const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData(prev => ({...prev , [e.target.id]: e.target.value}));
		console.log(formData.assigneeId);
	}
	const createMutate = useMutation({
		mutationFn: (taskData: CreateTaskData) => createTask(taskData),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['tasks']});
			navigate('/');

		}
	});
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createMutate.mutate(formData);
	}
	
	
	return (
		<div className="create-task">
			<h2>Новая задача</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"></label>
				<input id="title" value={formData.title} onChange={handleChangeFormData}/>
				{data && (
					<select id="assigneeId" value={formData.assigneeId} onChange={handleChangeFormData}>
						<option value={''}>выбрать исполнителя</option>
						{data.map(user => (
							<option key={user.id} value={user.id}>{user.name}</option>
						))}
					</select>
				)}
				<button type="submit" disabled={formData.title.trim() === '' || formData.assigneeId === ''}>Создать задачу</button>
			</form>
		</div>
	);
}