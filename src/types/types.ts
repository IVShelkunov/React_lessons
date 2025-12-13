interface IRating {
  rate: number,
  count: number
}
export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: IRating
}
export interface CartItem extends IProduct {
  quantity: number
}
type IStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
export interface ProductsState {
  items: IProduct[],
  status: IStatus,
  error: string | null
}
export interface FavoritesState {
  items: IProduct[]
}
export type ProductItemProps = {
  product: IProduct
}
export interface CartState {
  cartList: CartItem[],
  discount: number,
  promoStatus: IStatus
}
export type CartItemProps = {
  cartItem: CartItem
}