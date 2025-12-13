import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { CartState, IProduct } from "../types/types";

const initialState: CartState = {
	cartList: [],
	discount: 0,
	promoStatus: 'idle'
}
export const applyPromoCode = createAsyncThunk(
		'cart/applyPromoCode',
		async (promoCode:string) => {
			await new Promise(resolve => setTimeout(resolve , 1000));
			if(promoCode === 'REDUX2025') {
				return 10;
			} else {
				throw new Error('Ошибка активации промокода');
			}
		}

	);
export const cartSlice = createSlice({
	name: 'cart' , 
	initialState,
	reducers: {
		addToCart: (state , action: PayloadAction<IProduct>) => {
			const foundItem = state.cartList.find(item => item.id === action.payload.id);
			if(foundItem) {
				foundItem.quantity++;
			} else {
				state.cartList.push({...action.payload,quantity:1});
			}
		},
		removeFromCart: (state , action: PayloadAction<number>) => {
			state.cartList = state.cartList.filter(item => item.id !== action.payload);
		},
		decreaseQuantity: (state , action: PayloadAction<number>) => {
			const foundItem = state.cartList.find(item => item.id === action.payload);
			if(foundItem) {
				foundItem.quantity--;
				if(foundItem.quantity === 0) {
					state.cartList = state.cartList.filter(item => item.id !== action.payload);
				}
			}
		},
		clearCart: (state) => {
			state.cartList = [];
		} 

	},
	extraReducers: (builder) => {
		builder
		.addCase(applyPromoCode.pending , (state => {
			state.promoStatus = 'loading';
		}))
		.addCase(applyPromoCode.fulfilled , (state , action) => {
			state.promoStatus = 'succeeded';
			state.discount = action.payload;
		})
		.addCase(applyPromoCode.rejected , (state) => {
			state.promoStatus = 'failed';

		})
	}
});
export const {addToCart , removeFromCart , decreaseQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;