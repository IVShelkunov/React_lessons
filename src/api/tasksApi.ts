import type { ITask } from "../types/Task";
import { api } from "./instance";
//get Task with filter
export const fetchTasks = async (assigneeId?:string):Promise<ITask[]> => {
	const response = await api.get<ITask[]>('/tasks' , {
		params: {
			assigneeId,
		}
	});
	return response.data;
}
//create Task
export const createTask = async (newTaskData: Pick<ITask , 'title' | 'assigneeId'>):Promise<ITask> => {
	const response = await api.post<ITask>('/tasks' , {
		...newTaskData , 
		id: Date.now().toString(),
		status: 'todo'
	});
	return response.data;
}
//update TaskStatus
export const updateTaskStatus = async ({id,status}:Pick<ITask , 'id' | 'status'>): Promise<ITask> => {
	const response = await api.patch(`/tasks/${id}`,{status});
	return response.data;
}
//delete Task
export const deleteTask = async (id: string) => {
	const response = await api.delete(`/tasks/${id}`);
	return response;
}