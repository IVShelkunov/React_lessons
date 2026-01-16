import type { IProduct } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from './ProductList.module.css'
type ProductListProps = {
	productList: IProduct[]
}
export const ProductList = ({productList}:ProductListProps) => {
	return(
		<ul className={styles.list}>
			{productList.map(product => (
				<ProductCard key={product.id} product={product}/>
			))}
		</ul>
	);
}