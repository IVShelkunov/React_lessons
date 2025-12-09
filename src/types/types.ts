//Auth
export interface AuthState {
  user: string | null; // Имя пользователя. Если null — мы не залогинены
  isAuth: boolean;
}
//Tasks
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
export interface TasksState {
  list: Task[];
  status: 'idle' | 'loading' | 'failed';
}