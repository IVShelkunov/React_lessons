import { useShowStore } from "../store/showStore";

export function FavoritesPage() {
	const favorites = useShowStore(state => state.favorites);
	const removeFromFavorites = useShowStore(state => state.removeFromFavorites);
	return (
		<div className="favorites-list">
			{favorites.length === 0 ? 'Нет избранных сериалов': (
				<ul>
				{favorites.map(show => (
					<li key={show.id}>
						<img src={show.image?.medium}/>
						<h2>{show.name}</h2>
						<button onClick={() => removeFromFavorites(show.id)}>Убрать из избранного</button>
					</li>
				))}
			</ul>
			)}
		</div>
	);
}