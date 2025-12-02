import { create } from "zustand";
import type { CartState } from "../types/types";

export const useCartStore = create<CartState>((set) => ({
	//state
	items:[],
	//actions
	addToCart: (product) => set(state => {
		const isExist = state.items.some(item => item.id === product.id);
		if(isExist) {
			return {
				items: state.items.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1}: item)
			}
		} else {
			return {
				items: [...state.items , {...product , quantity: 1}]
			}
		}
	}),
	removeFromCart: (productId) => set(state => ({items: state.items.filter(item => item.id !== productId)})),
	clearCart: () => set({items:[]})
}));