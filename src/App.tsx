import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
