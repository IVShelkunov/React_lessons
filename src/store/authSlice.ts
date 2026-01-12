import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../types/user";

interface AuthState {
	isAuth: boolean,
	user: IUser | undefined
}
const initialState:AuthState = {
	isAuth: false,
	user: undefined
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state , action:PayloadAction<IUser>) => {
			state.isAuth = true;
			state.user = action.payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.user = undefined;
		}
	}
});
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;