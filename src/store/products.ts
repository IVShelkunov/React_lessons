import { create } from "zustand";
import type { ProductsState } from "../types/types";

export const useProductStore = create<ProductsState>((set) => ({
	products: [],
	isLoading: false,
	error: null,
	fetchProducts: async () => {
		set({isLoading: true , error: null});
		try {
			const response = await fetch('https://dummyjson.com/products');
			if(!response.ok) {
				throw new Error('Ошибка сервера или сети!');
			}
			const data = await response.json();
			set({products: data.products , isLoading: false});
		} catch(error) {
			if(error instanceof Error) {
				set({error: error.message , isLoading: false});
			}
		}
		

	}

}));