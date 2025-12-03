import { useEffect } from "react";
import { useCartStore } from "../store";
import  { useProductStore } from "../store/products";
import { ProductCard } from "./ProductCard";

export function ProductList() {
	const addToCart = useCartStore(state => state.addToCart);
	const {products , isLoading , error , fetchProducts} = useProductStore();
	useEffect(() => {
		fetchProducts();
	}, []);
	return (
	  <div className="product-list">
	  	<h2>Товары</h2>
	  	{isLoading && <p>Загрузка товаров...</p>}
	  	{error ? <p>{error}</p> : (
	  		<ul>
			{products.map(product => (
				<ProductCard key={product.id} product={product}/>
			))}
			</ul>
	  	)}
		
	  </div>
	);
}