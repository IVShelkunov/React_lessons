import { useTaskStore } from "../store";
export function TaskList() {
	const tasks = useTaskStore(state => state.tasks);
	const removeTask = useTaskStore(state => state.removeTask)
	return (
		<ul className="task-list">
			{tasks.map(task => (
				<li key={task.id}>{task.text}<button onClick={() => removeTask(task.id)}>Удалить</button></li>
			))}
		</ul>
	);
}