import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { AuthProvider } from './components/AuthProvider';
import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ProfilePage } from './pages/ProfilePage';
import { MyPostsPage } from './pages/MyPostsPage';
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
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>,
            children: [
              {
                index: true,
                element: <MyPostsPage/>
              }
            ]
          },
          
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </StrictMode>,
)
