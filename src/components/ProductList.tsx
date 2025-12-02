import { products } from "../data/products";
import { useCartStore } from "../store";

export function ProductList() {
	const addToCart = useCartStore(state => state.addToCart);
	return (
	  <div className="product-list">
	  	<h2>Товары</h2>
		<ol>
			{products.map(product => (
				<li key={product.id}>{product.title}<button onClick={() => addToCart(product)}>Купить</button></li>
			))}
		</ol>
	  </div>
	);
}