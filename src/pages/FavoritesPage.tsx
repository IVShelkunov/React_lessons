import { ProductItem } from "../components/ProductItem";
import { useAppSelector } from "../store/hooks";

export function FavoritesPage() {
	const favoritesList = useAppSelector(state => state.favorites.items);
	return (
		<div className="favorites">
			{favoritesList.length === 0 ? <p>Вы ничего не выбрали</p>: (
				<ul>
					{favoritesList.map(product => (
						<ProductItem key={product.id} product={product}/>
					))}
				</ul>
			)}
		</div>
	);
}