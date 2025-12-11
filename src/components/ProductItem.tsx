import type { ProductItemProps } from "../types/types";

export function ProductItem({product}: ProductItemProps) {
	return (
		<div className="product-item">
			<img src={product.image} />
			<h3>{product.title}</h3>
			<div>Рейтинг {product.rating.rate}
				<div className="rating">
				{[1,2,3,4,5].map(item => (
					<span key={item} className={Math.round(product.rating.rate) >= item ? 'is-rate': ''}>☆</span>
				))}
				</div>
			</div>
			<p>Цена: <span className="price">{product.price.toFixed(2)}$</span></p>
		</div>
	);
}