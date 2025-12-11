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
export interface ProductsState {
  items: IProduct[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}
export interface FavoritesState {
  items: IProduct[]
}
export type ProductItemProps = {
  product: IProduct
}