import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/Layout.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { HomePage } from './pages/HomePage.tsx'
import { LoginLayout } from './components/LoginLayout.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { RegistrationPage } from './pages/RegistrationPage.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'
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
            element: <RegistrationPage/>
          }
        ]
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: 'profile',
            element: <ProfilePage/>
          }
        ]
      },
      
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
