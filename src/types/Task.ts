export type TaskStatusType = 'todo' | 'in_progress' | 'done';
export interface ITask {
	id: string,
	title: string,
	status: TaskStatusType,
	assigneeId: string
}
export type CreateTaskData = Pick<ITask , 'title' | 'assigneeId'>;

