import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ITask } from "../types/Task";
import { deleteTask, updateTaskStatus } from "../api/tasksApi";
import { fetchUsers } from "../api/usersApi";
import type { IUser } from "../types/User";
type TaskCardProps = {
	task: ITask
}
export const TaskCard = ({task}: TaskCardProps) => {
	const {data} = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers
	});
	const queryClient = useQueryClient();
	const statusMutate = useMutation({
		mutationFn: ({id , status}:Pick<ITask , 'id' | 'status'>) => updateTaskStatus({id,status}),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['tasks']});
		}
	});
	const deleteMutate = useMutation({
		mutationFn: (id: string) => deleteTask(id),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['tasks']});
		}
	});
	const isExistItem = (item:IUser):boolean => {
		if(item.id === task.assigneeId) return true;
		return false;
	}
	return (
		<li className="task-card">
			<h4>📌{task.title}</h4>
			{data && <p>Исполнитель: {data.find(user => isExistItem(user))?.avatar}{data.find(user => isExistItem(user))?.name}</p>}
			{
          		task.status === 'todo' ? <button onClick={() => statusMutate.mutate({id:task.id , status: 'in_progress'})}>Start🚀</button>:
          		task.status === 'in_progress' ? <button onClick={() => statusMutate.mutate({id: task.id , status: 'done'})}>Finish🏁</button> :
          		<button onClick={() => statusMutate.mutate({id:task.id , status: 'todo'})}>Return🔄</button>
          	}
          	<button onClick={() => deleteMutate.mutate(task.id)}>❌</button>
		</li>
	);
}