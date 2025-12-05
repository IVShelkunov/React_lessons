import { create } from "zustand";
import type { SearchResultItem, ShowState } from "../types/types";

export const useShowStore = create<ShowState>(set => ({
	//state
	searchResults: [],
	favorites: [],
	isLoading: false,
	//actions
	searchShows: async (query) => {
		set({isLoading: true});
		try {
			const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
			const showData: SearchResultItem[] = await response.json();
			const shows = showData.map(resultItem => (resultItem.show));
			set({isLoading: false,searchResults: shows});
		} catch(error) {
			console.error(error);
			set({isLoading: false});
		}
	},
	toggleFavorites: (show) => set(state => {
		const isExist = state.favorites.some(favShow => favShow.id === show.id);
		if(!isExist) {
			return {
				favorites: [...state.favorites , show]
			} 
		} else {
			return {
				favorites: state.favorites.filter(favShow => favShow.id !== show.id)
			}
		}
	}),
	removeFromFavorites: (id) => set(state => ({
		favorites: state.favorites.filter(show => show.id !== id)
	}))
}));