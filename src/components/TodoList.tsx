import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from "../api/todos";

export function TodoList() {
	const queryClient = useQueryClient();
	//get получение данных
	const {data ,isLoading } = useQuery({
		queryKey: ['todos'],
		queryFn: fetchTodos
	});
	// Создание (POST)
	const addMutation = useMutation({
		mutationFn: addTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['todos']});
			setInput('');
		}
	});
	const [input , setInput] = useState('');
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}
	const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault();
		addMutation.mutate(input);
	}
	//Удаление (DELETE)
	const deleteMutation = useMutation({
		mutationFn: deleteTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['todos']});
		}
	});
	//выполнение задачи
	const toggleMutation = useMutation({
		mutationFn: toggleTodo,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['todos']});
		}
	}); 

	return (
		<div className="todo-list">
			<h1>To do list</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={input} onChange={handleChangeInput}/>
				<button type="submit" disabled={input.trim() === ''}>Add task</button>
			</form>
			{isLoading && <div>Загрузка задач...</div>}
			{data && (
				<ul>
					{data.map(task => (
						<li key={task.id}>
							<span className={task.completed? 'completed' : ''}>{task.title}</span>
							<input type="checkbox" checked={task.completed} onChange={() => toggleMutation.mutate(task)}/>
							<button onClick={() => deleteMutation.mutate(task.id)}>🗑️Delete task</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}