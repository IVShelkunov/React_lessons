import { useState } from "react";
import { useTaskStore } from "../store";

export function TaskForm() {
	const addTask = useTaskStore((state) => state.addTask);
	const [inputValue, setInputValue] = useState('');
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTask(inputValue);
		setInputValue('');
	}
	return (
		<form className="task-form" onSubmit={handleSubmit}>
			<label htmlFor="task-text">Новая задача:</label>
			<input type="text" id="task-text" value={inputValue} onChange={handleChangeInputValue}/>
			<button type="submit" disabled={inputValue.trim() === ''}>Добавить задачу</button>
		</form>
	);

}