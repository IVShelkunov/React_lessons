import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UsersListPage } from './pages/UsersListPage'
import { UserDetailsPage } from './pages/UserDetailsPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersListPage/>
  },
  {
    path: '/user/:userId',
    element: <UserDetailsPage/>
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>,
)
