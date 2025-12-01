export interface Task { id: number; text: string; }
export interface TaskState {
	//state
	tasks: Task[],
	//actions
	addTask: (text: string) => void,
	removeTask: (id: number) => void
}