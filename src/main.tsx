import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HomePage } from './components/HomePage.tsx'
import { LoginLayout } from './components/LoginLayout.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { CreateTicketPage } from './pages/CreateTicketPage.tsx'
import { DashboardPage } from './pages/DashboardPage.tsx'
const queryClient = new QueryClient();
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
        path: 'login',
        element: <LoginLayout/>,
        children: [
          {
            index: true,
            element: <LoginPage/>
          },
          {
            path: 'registration',
            element: <RegisterPage/>
          }
        ]
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>
          },
          {
            path: 'tickets',
            element: <DashboardPage/>
          },
          {
            path: 'create',
            element: <CreateTicketPage/>
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
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
