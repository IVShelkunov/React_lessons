import './App.css'
import { FilterPanel } from './components/FilterPanel'
import { TaskBoard } from './components/TaskBoard'


function App() {
  

  return (
      <div className='app'>
        <FilterPanel/>
        <TaskBoard/>
      </div>
  )
}

export default App
