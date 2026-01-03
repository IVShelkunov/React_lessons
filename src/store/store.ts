import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
const loadState = () => {
	try {
		const savedState = localStorage.getItem('authState');
		if(savedState === null) return undefined;
		return JSON.parse(savedState);
	} catch(err) {
		return undefined;
	}
}
export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	preloadedState: {
		auth: loadState()
	} 
});
store.subscribe(() => {
	const state = store.getState();
	try {
		
		localStorage.setItem('authState' , JSON.stringify(state.auth));
	} catch	(err) {
		console.error("Не удалось сохранить стейт", err);
	}
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;