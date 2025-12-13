import { addToCart, decreaseQuantity, removeFromCart } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";
import type { CartItemProps } from "../types/types";

export function CartItem({cartItem}:CartItemProps) {
	const dispatch = useAppDispatch(); 
	return (
			<tr>
				<td>{cartItem.title}</td>
				<td>цена: <span className="price">{cartItem.price}$</span></td>
				<td>
					<button onClick={() => dispatch(addToCart(cartItem))}>+</button>
					<span className="quantity">{cartItem.quantity}</span>
					<button onClick={() => dispatch(decreaseQuantity(cartItem.id))}>-</button>
				</td>
				<td><button onClick={() =>dispatch(removeFromCart(cartItem.id))}>🗑</button></td>
			</tr>
		
	);
}