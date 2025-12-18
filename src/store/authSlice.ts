import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types/types";
const storedId = localStorage.getItem('userId');
const initialState: AuthState = {
	userId: storedId,
	isAuth: !!storedId
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state , action: PayloadAction<string>) => {
			state.userId = action.payload;
			state.isAuth = true;
			localStorage.setItem('userId', action.payload);
		},
		logout: (state) => {
			state.userId = null;
			state.isAuth = false;
			localStorage.removeItem('userId');
		}

	}
});

export const {login , logout} = authSlice.actions;
export default authSlice.reducer;