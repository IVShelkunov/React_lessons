import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { PostDetailPage } from './pages/PostDetailPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'blog',
        element: <BlogPage/>
      },
      {
        path: 'blog/:postId',
        element: <PostDetailPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
