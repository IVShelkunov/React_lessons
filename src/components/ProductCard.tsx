import { useCartStore } from "../store";
import type { ProductCardProps } from "../types/types";

export function ProductCard({product}: ProductCardProps) {
	const addToCart = useCartStore(state => state.addToCart);
	return (
		<li className="product-card">
			<img src={product.images[0]}/>
			<h4>{product.title}</h4>
			<button onClick={() => addToCart(product)}>Купить</button>
		</li>
	);
}