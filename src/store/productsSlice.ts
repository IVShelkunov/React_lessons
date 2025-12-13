import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IProduct, ProductsState } from "../types/types";

const initialState: ProductsState = {
	items: [],
	status: 'idle',
	error: null
}
export const fetchProducts = createAsyncThunk(
	'products/fetchProducts' , 
	async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			if(!response.ok) throw new Error('Ошибка сети!');
			const data: IProduct[] = await response.json();
			return data;
		
		
	});
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(fetchProducts.pending , state => {
			state.status = 'loading';
		})
		.addCase(fetchProducts.fulfilled , (state , action) => {
			if(action.payload) {
				state.items = action.payload;
				state.status = 'succeeded';
			}
			
			
		})
		.addCase(fetchProducts.rejected , (state , action) => {
			if(action.error.message) {
				state.error = action.error.message;
				state.status = 'failed';
			}
			
		})
	}
});
export default productsSlice.reducer;
