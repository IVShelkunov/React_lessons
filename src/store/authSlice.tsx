import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types/types";

const initialState: AuthState = {
	user: null,
	isAuth: false
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state,action: PayloadAction<string>) => {
			state.user = action.payload;
			state.isAuth = true;
		},
		logout: (state) => {
			state.user = null;
			state.isAuth = false;
		}
	}
});
export const {login , logout} = authSlice.actions;
export default authSlice.reducer;