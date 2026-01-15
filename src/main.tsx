import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Layout } from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { LoginLayout } from './components/LoginLayout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProfileDataPage } from './pages/ProfileDataPage'
import { UserPostsPage } from './pages/UserPostsPage'
import { PostCreatePage } from './pages/PostCreatePage'
import { AllPostsPage } from './pages/AllPostsPage'
import { PostDetailPage } from './pages/PostDetailPage'
import { ChangeAvatarPage } from './pages/ChangeAvatarPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      //публичные маршруты
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'login',
        element: <LoginLayout/>,
        children: [
          {
            index:true,
            element: <LoginPage/>
          },
          {
            path: 'registration',
            element: <RegisterPage/>
          }
        ]
      },
      {
        path: '/posts',
        element: <AllPostsPage/>
      },
      {
        path: '/posts/:postId',
        element: <PostDetailPage/>
      },
      //приватные маршруты
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>,
            children: [
              {
                index: true,
                element: <ProfileDataPage/>
              },
              {
                path: 'posts',
                element: <UserPostsPage/>
              },
              {
                path: 'posts/:postId',
                element: <PostDetailPage/>
              },
              {
                path: 'create',
                element: <PostCreatePage/>
              },
              {
                path: 'changeAvatar',
                element: <ChangeAvatarPage/>
              }
            ]
          }
        ]
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
