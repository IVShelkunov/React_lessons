// Интерфейс для одного поста
export interface IPost {
  id: number;
  title: string;
  content: string;
}
export interface IForm  {
  title: string;
  content: string;
}
//Пропсы для главной
export type HomePageProps = {
	posts: IPost[]
}
export type CreatePostPageProps = {
	onAddPost: (newPost: IPost) => void
}