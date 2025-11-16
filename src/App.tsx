//App.tsx
import { Outlet } from 'react-router-dom';
import './components/Navigation'
import './App.css';
import { Navigation } from './components/Navigation';
import { useState } from 'react';
import type { Project } from './types/types';

function App() {
const [projects , setProjects] = useState<Project[]>([
  { id: 1, name: 'Проект "Аврора"' },
  { id: 2, name: 'Проект "Вега"' }
]);

return (
  <div>
    <header className='app-header'>
      <Navigation/>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer className='app-footer'>
      <p>© 2025</p>
    </footer>
  </div>
  );
}

export default App
