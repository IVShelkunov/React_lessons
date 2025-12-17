import type { ITodo } from "../types/types";

const BASE_URL = 'http://localhost:3001/todos';

export const fetchTodos = async (): Promise<ITodo[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTodo = async (title: string): Promise<ITodo> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false, id: Date.now().toString() }) // json-server любит строки ID
  });
  return res.json();
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
export const toggleTodo = async (todo: ITodo): Promise<ITodo> => {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: 'PATCH', // Используем PATCH, чтобы обновить точечно
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !todo.completed })
  });
  return response.json();
}
