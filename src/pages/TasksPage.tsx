import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, type ChangeEvent } from "react";
import { deleteTask, fetchTasks, toggleTask } from "../store/tasksSlice";
import { TaskCreator } from "../components/TaskCreator";

export function TasksPage() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.auth.user);
	const taskList = useAppSelector(state => state.tasks.list);
	const loadStatus = useAppSelector(state => state.tasks.status);
	useEffect(() => {
		dispatch(fetchTasks());
	} , []);
	return (
		<div className="task-page">
			<h2>Привет , {user}</h2>
			<TaskCreator/>
			{loadStatus === 'loading' ? <div className="spinner"></div> : loadStatus === 'idle' ? (
				<ul>
					{taskList.map(task => (
						<li key={task.id} className={task.completed ? 'completed' : ''}>
							<span >{task.title}</span>
							<input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))}/>
							<button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
						</li>
					))}
				</ul>
			) : <p>Не удалось загрузить список задач</p>}
		</div>
	);
}