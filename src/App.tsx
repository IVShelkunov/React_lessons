
import './App.css'
import { CreateNoteForm } from './components/CreateNoteForm';
import { FilterPanel } from './components/FilterPanel';
import { NodeList } from './components/NodeList';

function App() {
  
  
   
  return (
      <div className='app'>
        <FilterPanel />
        <NodeList/>
        <CreateNoteForm/>
      </div>
  )
}

export default App
