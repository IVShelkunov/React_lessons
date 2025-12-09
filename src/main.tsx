import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute';
import { TasksPage } from './pages/TasksPage';
import { LoginPage } from './pages/LoginPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Layout } from './components/Layout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        element: <ProtectedRoute/>,
        children: [
      {
        path: '/',
        element: <TasksPage/>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
    ]
  }
  
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
