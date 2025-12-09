import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/tasksSlice";

export function TaskCreator() {
	const dispatch = useAppDispatch();
	const [inputValue , setInputValue] = useState('');
	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}
	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addTask(inputValue));
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleChangeInputValue}/>
			<button type="submit" disabled={inputValue.trim() === ''}>➕</button>
		</form>
	);
}