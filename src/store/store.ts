import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice';
import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';
const loadFavoritesState = () => {
	try {
		const savedState = localStorage.getItem('favorites');
		if(savedState === null) return undefined;
		return JSON.parse(savedState);
	} catch(error) {
		console.error(error);
		return undefined;
	}
}
export const store = configureStore({
	reducer: {
		products: productsReducer,
		favorites: favoritesReducer,
		cart: cartReducer
	},
	preloadedState: {
		favorites: loadFavoritesState()
	}

});
store.subscribe(() => {
	const state = store.getState();
	try {
		const favoritesState = state.favorites;
		localStorage.setItem('favorites' , JSON.stringify(favoritesState));
	} catch(error) {
		console.error('Не удалось сохранить стейт' , error);
	}
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;