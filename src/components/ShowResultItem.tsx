import { Link } from "react-router-dom";
import type { Show, ShowResultItemProps } from "../types/types";
import { useState } from "react";
import { useShowStore } from "../store/showStore";

export function ShowResultItem ({show}: ShowResultItemProps) {
	const toggleFavorites = useShowStore(state => state.toggleFavorites);
	const [isFavorite , setIsFavorite] = useState(false);
	const handleToggleFavorites = (show: Show) => {
		toggleFavorites(show);
		setIsFavorite(prev => !prev);
	}
	return (
		<li key={show.id} className="show-item">
			<div className="present">
				<img src={show.image?.medium}/>
				<h3>{show.name}</h3>
			</div>
			<div className="control">
				<Link to={`/show/${show.id}`}>Подробнее</Link>
				<button className={isFavorite ? 'favorite' : ''} onClick={() => handleToggleFavorites(show)}>☆</button>
			</div>
		</li>
	);
}