import './App.css'
import { CryptoList } from './components/CryptoList'
import { Watchlist } from './components/Watchlist'

function App() {
  

  return (
      <div className='app'>
        <CryptoList/>
        <Watchlist/>
      </div>
  )
}

export default App
