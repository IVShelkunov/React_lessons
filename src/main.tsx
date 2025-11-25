import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './components/AuthProvider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import { AdminPage } from './pages/AdminPage.tsx'
import { AccessDeniedPage } from './pages/AccessDeniedPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'

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
        path: '/login',
        element: <LoginPage/>
      },
      //защищенные маршруты
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>
          }
        ]
      },
          //админ
      {
        element: <ProtectedRoute allowedRoles={['admin']}/>,
        children: [
          {
            path: 'dashboard',
            element: <AdminPage/>
          }
        ],
      },
      {
        path: 'access-denied',
        element: <AccessDeniedPage/>
      },
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
