import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
	value: string
}
const initialState: FilterState = {
	value: 'all'
} 
export const filterSlice = createSlice({
	name: 'filter' ,
	initialState,
	reducers: {
		changeFilter: (state , action: PayloadAction<string>) => {
			state.value = action.payload;
		} 
	}
});
export const {changeFilter} = filterSlice.actions;
export default filterSlice.reducer;