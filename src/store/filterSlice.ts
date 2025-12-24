import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterCategory, FilterState } from "../types/types";

const initialState:FilterState = {
	value: 'all'
}
export const filterSlice = createSlice({
	name: 'filter' ,
	initialState,
	reducers: {
		changeFilter: (state , action: PayloadAction<FilterCategory>) => {
			state.value = action.payload;
		}
	}

});
export const {changeFilter} = filterSlice.actions;
export default filterSlice.reducer;