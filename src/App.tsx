import './App.css'
import { Cart } from './components/Cart'
import { ProductList } from './components/ProductList'

function App() {
  

  return (
    
      <div className='app'>
        <h1>Магазин</h1>
        <div className='store-container'>
          <ProductList/>
          <Cart/>
        </div>
      </div>
    
  )
}

export default App
