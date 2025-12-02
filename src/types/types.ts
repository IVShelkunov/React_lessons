export interface Product {
	id: number, 
	title: string, 
	price: number 
}
export interface CartItem extends Product {
	quantity: number
}
//store
export interface CartState {
	//state
	items: CartItem[],
	//actions
	addToCart: (product: Product) => void,
	removeFromCart: (productId: number) => void,
	clearCart: () => void
}
