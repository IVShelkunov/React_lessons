import { createSlice , type PayloadAction} from "@reduxjs/toolkit";
import type { FavoritesState , IProduct } from "../types/types";

const initialState:FavoritesState = {
	items: []
}
export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites: (state , action: PayloadAction<IProduct>) => {
			state.items.push(action.payload);
		},
		removeFromFavorites: (state , action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		}
	}
});
export  const {addToFavorites , removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;