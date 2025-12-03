

export interface Product {
	id: number, 
	title: string, 
	price: number,
	images: string[] 
}
export interface CartItem extends Product {
	quantity: number
}
// store for Cart
export interface CartState {
	//state
	items: CartItem[],
	//actions
	addToCart: (product: Product) => void,
	removeFromCart: (productId: number) => void,
	clearCart: () => void
}
//store for productList
export interface ProductsState {
	//state
	products: Product[],
	isLoading: boolean,
	error: string | null,
	//actions
	fetchProducts: () => Promise<void>
}
//productCart
export type ProductCardProps = {
	product: Product
}
