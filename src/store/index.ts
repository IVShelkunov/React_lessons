import { create } from "zustand";
import type { TaskState } from "../types/types";

export const useTaskStore = create<TaskState>((set) => ({
	tasks: [],
	addTask: (text) => set(state => ({tasks: [...state.tasks , {id: Date.now() , text: text}]})),
	removeTask: (id) => set(state => ({tasks: state.tasks.filter(task => task.id !== id)}))
}));