import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/productsSlice";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { ProductItem } from "../components/ProductItem";

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
			<h2>Каталог товаров</h2>
			{status === 'loading'? <div className="spinner"></div> : status === 'failed' ? <div className="error">{error}</div> : (
				<ul>
				{productList.map(product => (
					<li key={product.id}>
						<ProductItem product={product}/>
						{favoritesList.some(fav => fav.id === product.id) ? <button onClick={() => dispatch(removeFromFavorites(product.id))} className="del-from-favorites">💔 Удалить</button> :
							<button onClick={() => dispatch(addToFavorites(product))} className='add-favorites'>❤️ Добавить</button>
						}
					</li>
				))}
				</ul>
			)}
			
		</div>
	);
}