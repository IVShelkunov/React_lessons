import {  useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";
import {  fetchTasks } from "../api/tasksApi";
import type { TaskStatusType } from "../types/Task";
import { TaskCard } from "./TaskCard";

export const TaskBoard = () => {
	
	const statusName = (status: TaskStatusType) => {
		switch(status) {
		case 'todo':
			return 'To do🎯';
		case 'in_progress': 
			return 'In progress⌛';
		case 'done':
			return 'Done✅'
		}
	}
	const filter = useAppSelector(state => state.filter.value);
	const {data , isLoading , isError , error} = useQuery({
		queryKey: ['tasks' , filter],
		queryFn: () => fetchTasks(filter === 'all' ? undefined : filter)
	});
	
	return (
		<div className="tasks-board">
			{isLoading && <div>загрузка задач...</div>}
          	{isError && <div>{error.message}</div>}
          	{data && (
          		<div className="tasks">
          				{Array.from(new Set(data.map(task => task.status))).map(status => (
          					<div key={status}>
          						<h2>{statusName(status)}</h2>
          						<ul>
          							{data.filter(task => task.status === status).map(task => (
          								<TaskCard key={task.id} task={task}/>
          							))}
          						</ul>
          					</div>
          				))}
          		</div>
          	)}
		</div>
	);
}
