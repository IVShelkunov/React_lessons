import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { ProjectsPage } from './pages/ProjectsPage.tsx'
import { ContactsPage } from './pages/ContactsPage.tsx'
import { ProjectDetailPage } from './pages/ProjectDetailPage.tsx'
import { ProjectDescription } from './components/ProjectDescription.tsx'
import { ProjectTech } from './components/ProjectTech.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'projects',
        element: <ProjectsPage/>
      },
      {
        path: 'contacts' ,
        element: <ContactsPage/>
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage/>,
        children: [
          {
            index: true , 
            element: <ProjectDescription/>
          },
          {
            path: 'tech',
            element: <ProjectTech/>
          }
        ]
      }

    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
