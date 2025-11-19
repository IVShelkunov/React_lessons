import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { DashboardLayout } from './components/DashboardLayout.tsx'
import { AnalyticsPage } from './pages/AnalyticsPage.tsx'
import { UsersPage } from './pages/UsersPage.tsx'
import { SettingsLayout } from './components/SettingsLayout.tsx'
import { ProfileSettingsPage } from './pages/ProfileSettingsPage.tsx'
import { SecuritySettingsPage } from './pages/SecuritySettingsPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
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
        path: 'about',
        element: <AboutPage/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <AnalyticsPage/>
      },
      {
        path: 'users',
        element: <UsersPage/>
      }
    ]
  },
  {
    path: '/setting' ,
    element: <SettingsLayout/>,
    children: [
      {
        index: true,
        element: <ProfileSettingsPage/>
      },
      {
        path: 'security',
        element: <SecuritySettingsPage/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
