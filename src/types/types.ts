export interface Show {
	id:number,
	name:string,
	image?:{medium:string},
	rating:{average:number | null},
	summary?:string
}

export interface SearchResultItem {
	score: number,
	show:Show
}
//store
export interface ShowState {
	//state
	searchResults: Show[],
	favorites: Show[],
	isLoading: boolean,
	//actions
	searchShows: (query:string) => Promise<void>,
	toggleFavorites: (show: Show) => void, //for searchPage
	removeFromFavorites: (id: number) => void //for favoritesPage
}
//ShowResultItem
export interface ShowResultItemProps {
	show: Show
}
//show details
export type ShowParams = {
	showId: string
}