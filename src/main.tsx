import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { PostDetailPage } from './pages/PostDetailPage.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'posts/:postId',
        element: <PostDetailPage/>
      },
      {
        path: '404',
        element: <NotFoundPage/>
      },
      {
        path: '*',
        element: <Navigate to={'/404'}/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
