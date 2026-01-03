import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../types/user";

export interface AuthState {
  user: IUser | null; // Данные пользователя
  isAuth: boolean;    // Залогинен или нет
} 
const initialState: AuthState = {
  user: null,
  isAuth: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state,action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    }
  }
});

export const {setCredentials , logout} = authSlice.actions;
export default authSlice.reducer;