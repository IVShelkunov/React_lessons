import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout';
import { SearchPage } from './pages/SearchPage';
import { ShowDetailPage } from './pages/ShowDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <SearchPage/>
      },
      {
        path: '/shows/:showId',
        element: <ShowDetailPage/>
      },
      {
        path: '/favorites',
        element: <FavoritesPage/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
