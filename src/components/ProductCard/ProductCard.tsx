import { useState } from "react";
import type { IProduct } from "../../types/product";
import styles from './ProductCard.module.css'

type ProductCardProps = {
	product: IProduct
}
export const ProductCard = ({product}: ProductCardProps) => {
	const [isSelected , setIsSelected] = useState(false);
	return (
		<li className={`${styles.card}  ${product.inStock ? `${isSelected ? styles.active : ''}` : styles.outStock}`} onClick={() => product.inStock && setIsSelected(prev => !prev)}>
			<h3 className={styles.productName}>{product.title}</h3>
			<p className={styles.price}>Цена: {product.price.toFixed(2)}$</p>
		</li>
	);
}