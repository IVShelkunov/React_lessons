import type { Post, User } from "../types/types";

export const initialPosts: Post[] = [
	{id: 1 , title: 'React' , content: 'Hello I learning React!',authorId: 1 },
	{id: 2 , title: 'HTML' , content: 'Hello practice HTML5.',authorId: 3 },
	{id: 3 , title: 'CSS' , content: 'I want to know all CSS properties',authorId: 2 },
	{id: 4 , title: 'JavaScript' , content: 'JavaScript - my favorite programming language!',authorId: 4 }

];
export const users: User[] = [
	{id: 1 , name: 'Ilya'},
	{id: 2 , name: 'Viktor'},
	{id: 3 , name: 'Petr'},
	{id: 4 , name: 'Alice'}
]