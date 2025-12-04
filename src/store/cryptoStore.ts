import { create } from "zustand";
import type { CryptoState } from "../types/types";
import { fetchCoinsList } from "../api/mockApi";

export const useCryptoStore = create<CryptoState>((set) => ({
	//state
	coins: [],
	watchlist: [],
	isLoading: false,
	//actions
	loadCoins: async () => {
		set({isLoading: true});
		const dataCoins = await fetchCoinsList();
		set({coins:dataCoins,isLoading: false});
	},
	addToWatchlist: (coin) => set(state => ({watchlist: [...state.watchlist , coin]})),
	removeFromWatchlist: (id) => set(state => ({watchlist: state.watchlist.filter(coin => coin.id !== id)}))
}));