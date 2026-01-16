
import { ProductList } from './components/ProductList/ProductList';
import type { IProduct } from './types/product'
import styles from './App.module.css'
function App() {
  //чтобы с концентрироваться на текущей теме не буду создавать фейковый сервер с базой продуктов и подключением QueryClient. допустим данные прилетели извне))
  const productList:IProduct[] = [
    {id: 1 , title: 'Laptop' , price: 437 , inStock: true},
    {id: 2 , title: 'Vacuum cleaner' , price: 280 , inStock: false},
    {id: 3 , title: 'Fridge' , price: 460, inStock: true},
    {id: 4 , title: 'Smartphone' , price: 365, inStock: true}
  ];
  return (
      <div className={styles.app}>
        <h1>Products</h1>
        <ProductList productList={productList}/>
      </div>
  )
}

export default App
