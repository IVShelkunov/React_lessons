import { ProductItem } from "../components/ProductItem";
import { addToCart } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function FavoritesPage() {
	const dispatch = useAppDispatch();
	const favoritesList = useAppSelector(state => state.favorites.items);
	return (
		<div className="favorites">
			{favoritesList.length === 0 ? <p>Вы ничего не выбрали</p>: (
				<ul>
					{favoritesList.map(product => (
						<>
						<ProductItem key={product.id} product={product}/>
						<button onClick={() => dispatch(addToCart(product))}>🛒В корзину </button>
						</>

					))}
				</ul>
			)}
			
		</div>
	);
}