import { createSlice , type PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import type { TasksState } from "../types/types";
import { loadTasks } from "../data/data";
const initialState: TasksState = {
	list: [],
	status: 'idle'
}
export const fetchTasks = createAsyncThunk(
		'tasks/fetchTasks' ,
		async () => {
			await new Promise(resolve => setTimeout(resolve , 1000));
			return loadTasks;
		}
	);
export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state , action: PayloadAction<string>) => {
			state.list.push({id: Date.now().toString(), title: action.payload , completed: false});
		},
		toggleTask: (state , action: PayloadAction<string>) => {
			const selectedTask = state.list.find(task => task.id === action.payload);
			if(selectedTask) {
				selectedTask.completed = !selectedTask.completed;
			}
		},
		deleteTask: (state , action: PayloadAction<string>) => {
			state.list.filter(task => task.id !== action.payload);
		}
	},
	extraReducers: (buider) => {
		buider
		.addCase(fetchTasks.pending , state => {
			state.status = 'loading'
		})
		.addCase(fetchTasks.fulfilled , (state , action) => {
			state.list = action.payload;
			state.status = 'idle';
		})
		.addCase(fetchTasks.rejected , state => {
			state.status = 'failed';
		})
	}
});
export const {addTask , toggleTask , deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;