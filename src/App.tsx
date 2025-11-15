import { useState } from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import type { IPost } from "./types/types";
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import './App.css';
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CreatePostPage } from "./pages/CreatePostPage";
function App() {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'Добро пожаловать в мой блог!', content: 'Это мой первый пост...' },
    { id: 2, title: 'Что такое React Router?', content: 'React Router - это библиотека для...' },
    ]);
    const handleAddPost = (newPost: IPost) => setPosts(prev => [...prev , newPost]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage posts={posts}/>}/>
          <Route path='create-post' element={<CreatePostPage onAddPost={handleAddPost}/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
