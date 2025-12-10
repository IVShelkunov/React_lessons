import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/productsSlice";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";

export function CatalogPage() {
	const dispatch = useAppDispatch();
	const productList = useAppSelector(state => state.products.items);
	const favoritesList = useAppSelector(state => state.favorites.items);
	const status = useAppSelector(state => state.products.status);
	const error = useAppSelector(state => state.products.error);
	useEffect(() => {
		dispatch(fetchProducts());
	},[]);
	return (
		<div className="catalog">
			<ul>
				{productList.map(product => (
					<li key={product.id}>
						<img src={product.image} />
						<h3>{product.title}</h3>
						{favoritesList.includes(product)? <button onClick={() => dispatch(addToFavorites(product))} className='add-favorites'>❤️</button> :
							<button onClick={() => dispatch(removeFromFavorites(product.id))} className="del-from-favorites">💔</button>
						}
						
					</li>
				))}
			</ul>
		</div>
	);
}